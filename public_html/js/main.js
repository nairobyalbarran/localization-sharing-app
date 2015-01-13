$(document).ready(function () {
    var map = L.map('map'),
            marker;
    //map.setView([40.4165000, -3.7025600], 16);
    map.locate({setView: true, maxZoom: 18});
    var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);

    function onLocationFound(e) {
        var radius = e.accuracy;
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
                function (response) {
                    marker.setPopupContent(response.display_name);
                    marker.update();
                }
        );
        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);
    function onLocationError(e) {
        alert(e.message);
    }
    map.on('locationerror', onLocationError);
});