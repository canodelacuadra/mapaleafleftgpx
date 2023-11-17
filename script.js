var map = L.map('map').setView([40.03714891012755, -3.608062792760403], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Tandem Aranjuez, 2023-2024'
}).addTo(map);

L.marker([40.03698, -3.60759]).addTo(map)
    .bindPopup('<a href="fuentedelaboticaria.html">Fuente de la Boticaria</a>')
    .openPopup();
L.marker([40.03846, -3.60797]).addTo(map)
    .bindPopup('<a href="salonreyescatolicos.html">Salón de los Reyes Católicos</a>');
L.marker([40.03806, -3.60925]).addTo(map)
    .bindPopup('<a href="fuentenino.html">Fuente del Niño de la Espina</a>');
L.marker([40.03687, -3.60803]).addTo(map)
    .bindPopup('<a href="puente_reina.html">Puente de  la Reina</a>')
    .openPopup();