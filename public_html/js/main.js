/* 
 */

$(document).ready(function() {
//    function hideSplash() {
//        $.mobile.changePage("#two", "fade");
//        }
//    setTimeout(hideSplash, 9000);
    
    
    var map, lat = 40.4167754, lng = -3.7037901999999576; //inializo variables 
    function geolocalizar() {

                 GMaps.geolocate({
                    success: function(position) {
                        lat = position.coords.latitude;  // guarda coords en lat y lng
                        lng = position.coords.longitude;

                        // Mueve el mapa hacia la posición indicada                 
                        map.setCenter(lat, lng);

                        // añade marcador en la posicion indicada[lat, lng]
                        map.addMarker({
                            lat: lat,
                            lng: lng
                        });
               

                    },
                    error: function(error) {
                        alert('Geolocalización falla: ' + error.message);
                    },
                    not_supported: function() {
                        alert("Su navegador no soporta geolocalización");
                    }
                });
            }
             map = new GMaps({// muestra mapa centrado en coords [lat, lng]
                    el: '#map',
                    lat: lat,
                    lng: lng
             });
            geolocalizar();
            
});