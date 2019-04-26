var mymap = L.map('mapid').setView([41.40113, 2.19601], 13);

  // load a tile layer

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYm1vcmFnYXMiLCJhIjoiY2p1a3ppaGd6MDY5bjN5bzVubGZwNThwMSJ9.o-NVSSmazYTwlhDy6xteuQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYm1vcmFnYXMiLCJhIjoiY2p1a3ppaGd6MDY5bjN5bzVubGZwNThwMSJ9.o-NVSSmazYTwlhDy6xteuQ'
}).addTo(mymap);



//Go to searched Location
function searchResult(latitude, longitude){
       console.log("searchResult Function: "+latitude, longitude);
      // mymap.flyTo([latitude, longitude], 12);
       //var marker = L.marker([latitude, longitude]).addTo(mymap);
    }

  function SearchClick(latitude, longitude){
    console.log("hola");
    mymap.flyTo([latitude, longitude], 12);
    var marker = L.marker([latitude, longitude]).addTo(mymap);
  }
  
//Click on location
var popup = L.popup();

function onMapClick(e) {

    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);