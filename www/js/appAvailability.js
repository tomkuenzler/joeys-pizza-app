function openFacebook() {
	appAvailability.check(
	    'fb://', // URI Scheme
	    function() {  // Success callback
	        window.open('fb://profile/335761773297446', '_system');
	    },
	    function() {  // Error callback
	        window.open('https://www.facebook.com/335761773297446','_system');
	    }
	);
}

// function openFacebook() {
// 	window.open('https://www.facebook.com/335761773297446','_system','location=yes');
// }