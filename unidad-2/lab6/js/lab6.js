//creación de nodos en la marcha
$(document).ready(function(){
    $('p').prepend('<h2>Power of selector</h2>');
    $('<h2>Power of selector</h2>').prependTo('p');
    $('h2').clone().prependTo('p');
});