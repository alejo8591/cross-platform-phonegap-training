$(document).ready(function(){
	$('p').prepend('<h2>Power of Selector</h2>');
	$('<h2>Power of Selector</h2>').prependTo('p');
	$('h2').clone().prependTo('p');
});