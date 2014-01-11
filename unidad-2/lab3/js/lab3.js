$(document).ready(function(){
    var $nodes = $('.level-3').children();
    alert ('El número de nodos es: ' + $nodes.length);
    console.log($nodes);
    var rxt = "";
    $('.level-3').children().each(function(){
        rxt += $(this).text();
    });
    alert (rxt);
});