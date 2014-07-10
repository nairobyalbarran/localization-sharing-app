$(document).ready(function() {
//    function hideSplash() {
//        $.mobile.changePage("#two", "fade");
//        }
//    setTimeout(hideSplash, 2000);


    // var map = L.map('map');


//    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//    }).addTo(map);



    var map = new L.Map('map', {center: new L.LatLng(51.51, -0.11), zoom: 13});
    var googleLayer = new L.Google('ROADMAP');
    map.addLayer(googleLayer);
    
//    var direccion = 'Madrid';
//    var latLngMad;

//    var geocoder;
//    geocoder = new google.maps.Geocoder();

    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
        var radius = e.accuracy / 2;

//       
//        var marker = new L.Marker(new L.LatLng(51.51, -0.11));
//        marker.bindPopup('Hello, world!');
//        map.addLayer(marker);


        L.marker(e.latlng).addTo(map)
                .bindPopup("Estás a " + radius + " metros de este punto").openPopup();

        L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
        alert(e.message);
    }

    map.on('locationerror', onLocationError);



//    geocoder.geocode({'address': direccion}, function(results, status) {
//        if (status === google.maps.GeocoderStatus.OK) {
//            latLngMad = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
//        }
//        else {
//            errMSG.innerHTML = "Error " + status;
//        }
//    });






});