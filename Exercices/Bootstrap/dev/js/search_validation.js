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
        var minDistance=document.getElementById("minDistance").value;
        var maxDistance=document.getElementById("maxDistance").value;var minDistance=document.getElementById("minDistance").value;
        var activityType=document.getElementById("Activity-nstate").value;

        //var nameValue = document.getElementById("maxDistance").value;
        console.log("Form valido: " + latitude, longitude, minDistance,maxDistance,activityType);
        mymap.flyTo([latitude, longitude], 11);
        var marker = L.marker([latitude, longitude]).addTo(mymap);
        // Print GPX file
        var gpx = 'tracks/mataro-port-i-platges.gpx'; // URL to your GPX file or the GPX itself
        new L.GPX(gpx, {async: true, marker_options: {
            startIconUrl: 'images/pin-icon-start.png',
            endIconUrl: 'images/pin-icon-end.png',
        }}).on('loaded', function(e) {
            mymap.fitBounds(e.target.getBounds());
        }).addTo(mymap);

    } else {
        alert("formulario no válido, introduce los campos que faltan, que no cuesta tanto ;)");
    }
});



