


$(document).ready(function() {

    var map = L.map('map'),
            marker;
    //map.setView([40.4165000, -3.7025600], 16);
    map.locate({setView: true, maxZoom: 18});
    var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);


//            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//            }).addTo(map);
    function onLocationFound(e) {
        if (!marker) {
            marker = L.marker([0, 0]);
            marker.bindPopup("");
            marker.addTo(map);
        }
        marker.setLatLng(e.latlng);
        marker.setPopupContent("GPS coordinates: " + e.latlng.lat + ", " + e.latlng.lng + "<br />Searching for the address...");
        marker.update();
        marker.openPopup();
        map.panTo(e.latlng);
        $.getJSON("http://nominatim.openstreetmap.org/reverse?format=json&addressdetails=0&zoom=18&lat=" + e.latlng.lat + "&lon=" + e.latlng.lng + "&json_callback=?",
                
        function(response) {
                    marker.setPopupContent(response.display_name);
                    marker.update();
                }
        );
    }

    map.on('locationfound', onLocationFound);
    function onLocationError(e) {
        alert(e.message);
    }
    map.on('locationerror', onLocationError);




//   var map = new L.Map('map', {center: new L.LatLng(51.51, -0.11), zoom: 13}),
//   marker;
//   map.locate({setView: true, maxZoom: 16}); 
//   var googleLayer = new L.Google('ROADMAP');
//   map.addLayer(googleLayer);
//
//  
//    
//    function onLocationFound(e) {
//       var radius = e.accuracy / 2;
//       var marker = new L.Marker(new L.LatLng(51.51, -0.11));
//       marker.bindPopup('Hello, world!');
//       map.addLayer(marker);
//
//       L.marker(e.latlng).addTo(map)
//                .bindPopup("Estás a " + radius + " metros de este punto").openPopup();
//        L.circle(e.latlng, radius).addTo(map);
//    }
//    
});