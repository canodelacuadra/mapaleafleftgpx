//añadimos un circulo  si funciona la geolocolización
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Está usted a  " + radius + " metros de este punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}
// Si la geolocalización falla
map.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);