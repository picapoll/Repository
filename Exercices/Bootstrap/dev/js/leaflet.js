var mymap = L.map('mapid').setView([41.40113, 2.19601], 13);

  // load a tile layer


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYm1vcmFnYXMiLCJhIjoiY2p1a3ppaGd6MDY5bjN5bzVubGZwNThwMSJ9.o-NVSSmazYTwlhDy6xteuQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYm1vcmFnYXMiLCJhIjoiY2p1a3ppaGd6MDY5bjN5bzVubGZwNThwMSJ9.o-NVSSmazYTwlhDy6xteuQ'
}).addTo(mymap);

//Marker

//var marker = L.marker([51.5, -0.09]).addTo(map);
//marker.bindPopup("<b>Hello world!</b><br>Aquí estic.").openPopup();

//Click on location
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);