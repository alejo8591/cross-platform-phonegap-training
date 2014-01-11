$(document).ready(function(){
   var users = [
   		{
   			'role' : 101,
   			'name' : "Giovanny R.",
   			'email' : 'giovanny@agilapps.co'
   		},
   		{
   			'role' : 102,
   			'name' : "Edwin G.",
   			'email' : 'edwin@agilapps.co'
   		},
   		{
   			'role' : 103,
   			'name' : "Daniel G.",
   			'email' : 'daniel@agilapps.co'
   		},
   		{
   			'role' : 104,
   			'name' : "Manuel P.",
   			'email' : 'manuel@agilapps.co'
   		},
   		{
   			'role' : 105,
   			'name' : "Alejandro R.",
   			'email' : 'alejandro@agilapps.co'
   		}
   ];
   
   $.each(users, function(index, value){
   	$('table#listOfValues').append('<tr><td>' + value.role + '</td><td>' 
   		+ value.name + '</td></tr>');
   });
});