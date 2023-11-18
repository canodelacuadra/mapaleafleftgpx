var map = L.map('map').setView([40.03850, -3.60993], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Tandem Aranjuez, 2023-2024'
}).addTo(map);
map.locate({ setView: true, maxZoom: 16 });

let markerBoticaria = L.marker([40.03698, -3.60759], {
     icon:	new L.NumberedDivIcon({number: '1'})
}).addTo(map)
    .bindPopup('<a href="fuentedelaboticaria.html">Fuente de la Boticaria</a>');
    // .openPopup();
let markerReyes = L.marker([40.03846, -3.60797], {
     icon:	new L.NumberedDivIcon({number: '2'})
})
    .addTo(map)
    .bindPopup('<a href="salonreyescatolicos.html">Salón de los Reyes Católicos</a>');
let markerEspina=L.marker([40.03806, -3.60925]).addTo(map)
    .bindPopup('<a href="fuentenino.html">Fuente del Niño de la Espina</a>');
L.marker([40.03687, -3.60803]).addTo(map)
    .bindPopup('<a href="puente_reina.html">Acceso desde el jardím la Reina</a>');
    //.openPopup();
    // insertando una imange
    var imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Logo_de_Patrimonio_Nacional.svg/1200px-Logo_de_Patrimonio_Nacional.svg.png',
    imageBounds = [[40.04259, -3.61225], [40.04146, -3.60919]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

