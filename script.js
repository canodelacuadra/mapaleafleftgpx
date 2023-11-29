var map = L.map('map').setView([40.03850, -3.60993], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Tandem Aranjuez, 2023-2024'
}).addTo(map);

let markerAcceso= L.marker([40.03687, -3.60803], {
     icon:	new L.NumberedDivIcon({number: '1'})
}).addTo(map)
    .bindPopup('<a href="puente_reina.html">Acceso desde el jardín la Reina</a>');

let markerBoticaria = L.marker([40.03698, -3.60759], {
     icon:	new L.NumberedDivIcon({number: '2'})
}).addTo(map)
    .bindPopup('<a href="fuentedelaboticaria.html">Fuente de la Boticaria</a>');
    // .openPopup();
let markerReyes = L.marker([40.03846, -3.60797], {
     icon:	new L.NumberedDivIcon({number: '3'})
})
    .addTo(map)
    .bindPopup('<a href="salonreyescatolicos.html">Salón de los Reyes Católicos</a>');
let markerEspina=L.marker([40.03806, -3.60925], {
     icon:	new L.NumberedDivIcon({number: '4'})
}).addTo(map)
    .bindPopup('<a href="fuentenino.html">Fuente del Niño de la Espina</a>');
//.openPopup();  
    // insertando una imagen
    var imageUrl = './images/explorador.png',
    imageBounds = [[40.0427,-3.6124], [40.0413, -3.61]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

//creamos un link desde la lista numerada del legend
document.getElementById('acceso').addEventListener('click', function(){
    markerAcceso.fire('click')
})
document.getElementById('boticaria').addEventListener('click', function(){
    markerBoticaria.fire('click')
})
document.getElementById('salon').addEventListener('click', function(){
    markerReyes.fire('click')
})
document.getElementById('espina').addEventListener('click', function(){
    markerEspina.fire('click')
})