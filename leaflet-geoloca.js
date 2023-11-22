let btnGeo = document.getElementById('btn-geo');
function geolocalizacion() {
    if(btnGeo.classList.contains( 'active' )){
        btnGeo.textContent='Activar Geolocalización';
        btnGeo.classList.remove('active');
         // geolocalización anulada
    map.stopLocate({setView: false, maxzoom: 16});

    }else{

    // geolocalización
    map.locate({ setView: true, maxZoom: 16 });
    //añadimos un circulo  si funciona la geolocolización
    function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Está usted a  " + radius + " metros de este punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);
   
    }
    // Si la geolocalización  falla
    map.on('locationfound', onLocationFound);
    function onLocationError(e) {
    alert(e.message);
    }
    // mostramos el error
    map.on('locationerror', onLocationError);
    // añadimos al boton la clase active para despues poder desactivarlo
    btnGeo.classList.add('active'); 
      btnGeo.textContent='Desactivar Geolocalización';
    } 
}

btnGeo.addEventListener('click', function () {
    geolocalizacion();
})
