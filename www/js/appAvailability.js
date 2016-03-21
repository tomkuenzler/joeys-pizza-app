function openFacebook() {
	appAvailability.check(
	    'com.facebook.katana', // URI Scheme
	    function() {  // Success callback
	        window.location.href = "fb://facewebmodal/f?href=https://www.facebook.com/joeyspizzapasta";
	    },
	    function() {  // Error callback
	        window.location.href = "https://www.facebook.com/335761773297446";
	    }
	);
}

function openInstagram() {
	appAvailability.check(
	    'com.instagram.android', // URI Scheme
	    function() {  // Success callback
	        window.location.href = "instagram://user?username=joeys_pizzapasta";
	    },
	    function() {  // Error callback
	        window.location.href = "https://www.instagram.com/joeys_pizzapasta";
	    }
	);
}