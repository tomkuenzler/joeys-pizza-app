function openFacebook() {
	appAvailability.check(
	    'fb://', // URI Scheme
	    function() {  // Success callback
	        window.open('fb://profile/335761773297446', '_system');
	    },
	    function() {  // Error callback
	        cordova.InAppBrowser.open('https://www.facebook.com/335761773297446','_blank');
	    }
	);
}

function openInstagram() {
	appAvailability.check(
	    'instagram://', // URI Scheme
	    function() {  // Success callback
	        window.open('instagram://user?username=joeys_pizzapasta', '_system');
	    },
	    function() {  // Error callback
	        cordova.InAppBrowser.open('https://www.instagram.com/joeys_pizzapasta/','_blank');
	    }
	);
}