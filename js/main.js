var kitten = document.getElementById( 'kitten' );
var cattoys = document.getElementById( 'cattoys' );
var catfood = document.getElementById( 'catfood' );

// Listens for mouseover of the cat image and adds paragraph.
kitten.addEventListener( 'mouseover', function() {
	var newDOMElement = document.createElement( 'p' );
	newDOMElement.innerHTML = 'Hi, there! So nice to meet you!';
	document.getElementsByTagName( 'body' )[ 0 ].appendChild( newDOMElement );
} );

// Listens for click of toys image and adds paragraph.
cattoys.addEventListener( 'click', function() {
	var newDOMElement = document.createElement( 'p' );
	newDOMElement.innerHTML = 'I love it when someone plays with me!';
	document.getElementsByTagName( 'body' )[ 0 ].appendChild( newDOMElement );
} );

// Listens for double click of food image and adds paragraph.
catfood.addEventListener( 'dblclick', function() {
	var newDOMElement = document.createElement( 'p' );
	newDOMElement.innerHTML = 'Thanks! I was hungry!';
	document.getElementsByTagName( 'body' )[ 0 ].appendChild( newDOMElement );
} );
