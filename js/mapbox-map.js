"use strict"
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
});
map.setStyle('mapbox://styles/mapbox/satellite-streets-v11')
map.setZoom(12)
map.setCenter([-98.4936, 29.4241])
map.addControl(new mapboxgl.NavigationControl())

function dayWeather(lat, lon) {
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_MAP_TOKEN,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        $('#weather').html('');
        for (var i = 0; i < 5; i++) {
            var today = data.daily[i];
            var todayDate = new Date(today.dt * 1000);
            var date = todayDate.toDateString();
            console.log(date)
            var htmlStr = "<div id='weather" + (i + 1) + "' class='card grow' style=\"width: 15rem;\">";
            htmlStr += '<img class="card-img-top" alt="icons" src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png\n\"> '
            htmlStr += '<div class="card-body">'
            htmlStr += '<h3 class="card-title">' + date + '</h3>';
            htmlStr += '<div class="hidden card-text hide">' + 'Highest: ' + Math.round(data.daily[i].temp.max) + '°' + '</div>';
            htmlStr += '<div class="hidden card-text hide">' + 'Lowest: ' + Math.round(data.daily[i].temp.min) + '°' + '</div>';
            htmlStr += '<hr>'
            htmlStr += '<div class="hidden card-text hide">' + 'Wind Moving From: ' + windCardinalDirection(data.daily[i].wind_deg) + '</div>';
            htmlStr += '<div class="hidden card-text hide">' + 'Wind Speed: ' + Math.round(data.daily[i].wind_speed) + 'mph' + '</div>'
            htmlStr += '<div class="hidden card-text hide">' + 'Humidity: ' + data.daily[i].humidity + '</div>';
            htmlStr += '<div class="hidden card-text hide">' + 'Chance Of Rain: ' + (data.daily[i].pop * 100) + '%' + '</div>';
            htmlStr += '<div class="hidden card-text hide">' + 'Weather will be: ' + data.daily[i].weather[0].description + '</div>';
            htmlStr += '</div>';
            $('#weather').append(htmlStr);

            $('#weather' + (i + 1) + '').click(function () {
                $(this).children('div').first().children('.hidden').slideToggle(1000)
            })

            // $('#weather' + (i + 1) + '').click(function () {
            //     $('.hidden').slideToggle(1000)
            // })
        }
    });
}

function windCardinalDirection(degrees) {
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >= 0 && degrees <= 11.25)) {
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25) {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}

var popup = new mapboxgl.Popup()
    .setHTML("<h3>San Antonio, Texas</h3>")

var marker = new mapboxgl.Marker({
    color: 'blue',
})
    .setLngLat([-98.4936, 29.4241])
    .setDraggable(true)
    .addTo(map)
    .setPopup(popup)
dayWeather(marker.getLngLat().lat, marker.getLngLat().lng)


marker.on('dragend', function () {
    dayWeather(marker.getLngLat().lat, marker.getLngLat().lng)
    reversing();
    console.log()
})


$('#search').click(function () {
    var userInput = $('#location').val()
    markerSearch(userInput)
})


function markerSearch(geosearching) {
    geocode(geosearching, MAPBOX_ACCESS_TOKEN).then(function (results) {
        marker.setLngLat(results)
        dayWeather(marker.getLngLat().lat, marker.getLngLat().lng)
        reversing();
        console.log(results)
        map.flyTo({
            center: results,
            zoom: 10,
            speed: 1
        })
    })
}

var lanlonobj = {};

function reversing() {
    lanlonobj = {lat: marker.getLngLat().lat, lng: marker.getLngLat().lng};
    console.log(lanlonobj)
    reverseGeocode(lanlonobj, MAPBOX_ACCESS_TOKEN).then(function (results) {
        var arr = results.features;
        var place = arr.find(x => x.id.includes('place') === true);
        marker._popup._content.innerHTML = '<h3>' + place.place_name + '</h3>';
        console.log(results);
    })
}

