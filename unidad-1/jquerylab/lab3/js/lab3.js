$(document).ready(function(){
	var $nodes = $('#root').children();
	alert('El número de Nodos es: '+ $nodes.length);
	var rxt = "";
	$('#root').children().each(function(){
		rxt += $(this).text();
	});
	alert(rxt);
});