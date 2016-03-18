var heading = document.getElementsByTagName( 'h1' )[ 0 ];
var x = 0;

heading.addEventListener( 'click', function() {
	var newDOMElement = document.createElement( 'p' );
	newDOMElement.innerHTML = 'This is click number ' + ++x;
	document.getElementsByTagName( 'body' )[ 0 ].appendChild( newDOMElement );
} );
