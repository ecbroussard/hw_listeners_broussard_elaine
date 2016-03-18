var formsubmit = document.getElementsByTagName( 'form' )[ 0 ];

formsubmit.addEventListener( 'submit', function( event ) {
	event.preventDefault();
	console.log( 'The firstName is: ' + document.getElementById( 'firstname' ).value );
	console.log( 'The lastName is: ' + document.getElementById( 'lastname' ).value );
	console.log( 'The email is: ' + document.getElementById( 'email' ).value );
	console.log( 'The message is: ' + document.getElementById( 'message' ).value );
} );
