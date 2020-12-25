

function get_param(urlParams, key, default_value) {
    var value = urlParams.get(key);
    return value !== null? value : default_value
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var level = get_param(urlParams, 'level', 0);
var seed  = get_param(urlParams, 'seed', Math.round(Math.random() * 100000));

document.getElementById("level_buttons").innerHTML = 
'<a class="w3-button w3-green" href="/draw.html/?seed=' +  seed + '&turn=0&level=green">GRÖNT</a>' +
'<a class="w3-button w3-yellow" href="/draw.html/?seed=' + seed + '&turn=0&level=yellow">GULT</a>' +
'<a class="w3-button w3-orange" href="/draw.html/?seed=' + seed + '&turn=0&level=orange">ORANGE</a>' +
'<a class="w3-button w3-red" href="/draw.html/?seed=' +    seed + '&turn=0&level=red">RÖTT</a>';



document.getElementById("card_container").innerHTML = 
'<a class="w3-button w3-green" href="/draw.html/?seed=' +  seed + '&turn=0&level=green">GRÖNT</a>' +
'<a class="w3-button w3-yellow" href="/draw.html/?seed=' + seed + '&turn=0&level=yellow">GULT</a>' +
'<a class="w3-button w3-orange" href="/draw.html/?seed=' + seed + '&turn=0&level=orange">ORANGE</a>' +
'<a class="w3-button w3-red" href="/draw.html/?seed=' +    seed + '&turn=0&level=red">RÖTT</a>';

