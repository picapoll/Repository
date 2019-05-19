//search-form Validation

$("#Search-form").validate({
    rules: {
        "place": {
            required: true,

        },
        "minDistance": {
            required: true,

        },
        "maxDistance": {
            required: true,

        }
    },

    messages: {
        "place": {
            required: " Este campo es obligatorio"
        },
        "minDistance": {
            required: "Este campo es obligatorio.Introduce la distancia minima",

        },
        "maxDistance": {
            required: "Este campo es obligatorio.Introduce la distancia maxima",

        },
    }
});




//OnSubmit Form 
$("#Search-form").submit(function () {
    console.log("Submitted: " + latitude, longitude);
    if ($('#Search-form').valid()) {
        var minDistance = document.getElementById("minDistance").value;
        var maxDistance = document.getElementById("maxDistance").value; var minDistance = document.getElementById("minDistance").value;
        var activityType = document.getElementById("Activity-nstate").value;

        //var nameValue = document.getElementById("maxDistance").value;
        console.log("Form valido: " + latitude, longitude, minDistance, maxDistance, activityType);
        mymap.flyTo([latitude, longitude], 13);
        var marker = L.marker([latitude, longitude]).addTo(mymap);

        // Print one GPX file
        /*       var gpx = 'tracks/mataro-port-i-platges.gpx'; // URL to your GPX file or the GPX itself
               new L.GPX(gpx, {async: true, marker_options: {
                   startIconUrl: 'images/pin-icon-start.png',
                   endIconUrl: 'images/pin-icon-end.png',
               },polyline_options: { color: 'red' } 
             }).on('loaded', function(e) {
                 // mymap.fitBounds(e.target.getBounds());
               }).addTo(mymap); */

        // Print Multiple GPX files
        var listOfFilesPath = [
            "tracks/mataro-port-i-platges.gpx",
            "tracks/mataro-corriols-fins-avorrir.gpx",
            "tracks/mataro-sant-andreu-de-llavaneres-mataro.gpx"
        ];
        

    // Create Colors
        function get_my_color(hexcolor) {
          var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color; 
           
        }

        for (var i = 0; i < listOfFilesPath.length; i += 1) {
            var name = "";
            var distance="";
            console.log("log-> "+name + distance);
         
            new L.GPX(listOfFilesPath[i], {
                async: true, marker_options: {
                    startIconUrl: 'images/pin-icon-start.png',
                    endIconUrl: 'images/pin-icon-end.png',
                    shadowUrl: 'images/pin-shadow.png'
                }, polyline_options: { color: get_my_color() }               
               
            }).on('loaded', function(e) {
                var gpx=e.target;
                         
              //Distancia
               distance =(gpx.get_distance());
               name =(gpx.get_name());
              var metros= x = Math.round(distance);
              console.log("el nombre es: "+ name +" y la distancia en m del recorrido es de : "+ metros);
             
            }).addTo(mymap).bindPopup(name + "Distancia: "+ distance);
           
            console.log("log2-> "+name + distance);
          
        }

    } else {
        alert("formulario no válido, introduce los campos que faltan, que no cuesta tanto ;)");
    }
});



