function openFacebook() {
	appAvailability.check(
	    'com.facebook.katana', // URI Scheme
	    function() {  // Success callback
	        window.open('fb://facewebmodal/f?href=https://www.facebook.com/joeyspizzapasta', '_system');
	    },
	    function() {  // Error callback
	        window.open('https://www.facebook.com/335761773297446','_system');
	    }
	);
}

function openInstagram() {
	appAvailability.check(
	    'com.instagram.android', // URI Scheme
	    function() {  // Success callback
	        window.open('instagram://user?username=joeys_pizzapasta', '_system');
	    },
	    function() {  // Error callback
	        window.open('https://www.instagram.com/joeys_pizzapasta/','_system');
	    }
	);
}