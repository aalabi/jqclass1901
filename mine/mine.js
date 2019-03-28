var properties ={	
	magodo: [
	'P1.jpg',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt culpa qui officia deserunt mollit anim id est laborum.',
	'kvngben@gmail.com',
	'07053147847'
	],
	parkView: [
	'P2.jpg',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt culpa qui officia deserunt mollit anim id est laborum.',
	'kvngben@gmail.com',
	'07053147847'
	],
	victoriaIsland: [
	'P3.jpg',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt culpa qui officia deserunt mollit anim id est laborum.',
	'kvngben@gmail.com',
	'07053147847'
	],
	ogba: [
	'P4.jpg',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt culpa qui officia deserunt mollit anim id est laborum.',
	'kvngben@gmail.com',
	' 07053147847'
	],
	lekki: [
	'P5.png',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt culpa qui officia deserunt mollit anim id est laborum.',
	'kvngben@gmail.com',
	'07053147847'
	],
	iyanaIpaja: [
	'P6.jpg',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt culpa qui officia deserunt mollit anim id est laborum.',
	'kvngben@gmail.com',
	'07053147847'
	],

}


$('#magodo').click(
	function(){
		$('#propertyImage').html('<img src='+ properties.magodo[0]+'>')
		$('#propertyDescription').html('<p>'+ properties.magodo[1]+ '</p>')
		$("#propertyEmail").html("<a href='mailto:"+properties.magodo[2]+"'><button id='email'>mail "+properties.magodo[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+properties.magodo[3]+"'><button id='email''>call "+properties.magodo[3]+"</button></a>");
	
	});

$('#parkView').click(
	function(){
		$('#propertyImage').html('<img src='+ properties.parkView[0]+'>')
		$('#propertyDescription').html('<p>'+ properties.parkView[1]+ '</p>')
		$("#propertyEmail").html("<a href='mailto:"+properties.parkView[2]+"'><button id='email'>mail "+properties.parkView[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+properties.parkView[3]+"'><button id='email''>call "+properties.parkView[3]+"</button></a>");
	
	});
$('#victoriaIsland').click(
	function(){
		$('#propertyImage').html('<img src='+ properties.victoriaIsland[0]+'>')
		$('#propertyDescription').html('<p>'+ properties.victoriaIsland[1]+ '</p>')
		$("#propertyEmail").html("<a href='mailto:"+properties.victoriaIsland[2]+"'><button id='email'>mail "+properties.victoriaIsland[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+properties.victoriaIsland[3]+"'><button id='email''>call "+properties.victoriaIsland[3]+"</button></a>");
	
	});
$('#lekki').click(
	function(){
		$('#propertyImage').html('<img src='+ properties.ogba[0]+'>')
		$('#propertyDescription').html('<p>'+ properties.ogba[1]+ '</p>')
		$("#propertyEmail").html("<a href='mailto:"+properties.ogba[2]+"'><button id='email'>mail "+properties.ogba[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+properties.ogba[3]+"'><button id='email''>ogba"+properties.ogba[3]+"</button></a>");
	
	});
$('#ogba').click(
	function(){
		$('#propertyImage').html('<img src='+ properties.lekki[0]+'>')
		$('#propertyDescription').html('<p>'+ properties.lekki[1]+ '</p>')
		$("#propertyEmail").html("<a href='mailto:"+properties.lekki[2]+"'><button id='email'>mail "+properties.lekki[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+properties.lekki[3]+"'><button id='email''>call "+properties.lekki[3]+"</button></a>");
	
	});
$('#iyanaIpaja').click(
	function(){
		$('#propertyImage').html('<img src='+ properties.iyanaIpaja[0]+'>')
		$('#propertyDescription').html('<p>'+ properties.iyanaIpaja[1]+ '</p>')
		$("#propertyEmail").html("<a href='mailto:"+properties.iyanaIpaja[2]+"'><button id='email'>mail "+properties.iyanaIpaja[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+properties.iyanaIpaja[3]+"'><button id='email''>call "+properties.iyanaIpaja[3]+"</button></a>");
		$('#propertyImage').fadeIn('10000');
		$('#propertyDescription').fadeIn('10000');
	});

var href = window.location.href;
var host = window.location.host;

$('#press').click(
	function(){
	window.location.href = "formpage.html";
	}

	)

