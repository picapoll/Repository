function init() {
    var input = document.getElementById('LocationSearch');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields(
        ['address_components', 'geometry', 'icon', 'name']);
    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);
    autocomplete.addListener('place_changed', function () {
        infowindow.close();

    var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        };
        var latitude = place.geometry.location.lat();
        var longitude = place.geometry.location.lng();
     
     

    var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }



    console.log("Lat: "+ latitude +", long: " + longitude);
    console.log(address);
    
    searchResult(latitude, longitude);    
    
    
})
}

google.maps.event.addDomListener(window, 'load', init);