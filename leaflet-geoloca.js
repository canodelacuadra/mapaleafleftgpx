let btnGeo = document.getElementById('btn-geo');
function geolocalizacion(){
     // geolocalización
     map.locate({ setView: true, maxZoom: 16 });
     //creamos una funcioon si la geolocalización esta activa
     function onLocationFound(e) {
     var radius = e.accuracy;
         // le añañadimus un marcador que nos muestra los metros a los que estamos del mapa
     var markerLocation= L.marker(e.latlng).addTo(map)
      .bindPopup("Está usted a  " + radius + " metros de este punto").openPopup();
 
    var markerCirculo =  L.circle(e.latlng, radius).addTo(map);
    
     }
 
     map.on('locationfound', onLocationFound);
         // Si la geolocalización  falla
     function onLocationError(e) {
     alert(e.message);
     }
     // mostramos el error
     map.on('locationerror', onLocationError);
     // añadimos al boton la clase active para despues poder desactivarlo
     btnGeo.classList.add('active'); 
       btnGeo.textContent='Desactivar Geolocalización';
}
    



