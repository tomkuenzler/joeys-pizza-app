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

function openInstagram() {
	appAvailability.check(
	    'instagram://', // URI Scheme
	    function() {  // Success callback
	        window.open('instagram://user?username=joeys_pizzapasta', '_system');
	    },
	    function() {  // Error callback
	        window.open('https://www.instagram.com/joeys_pizzapasta/','_system');
	    }
	);
}

function openMaps() {
	window.location.href = "maps://maps.apple.com/?q=Joeys+Pizza+%26+Pasta&address=1340,NJ-72,Manahawkin,NJ";
}

function openMapsShip() {
	window.location.href = "http://maps.apple.com/?q=Joeys+Pizza&address=2201,Long+Beach+Blvd,Beach+Haven,NJ";
}

function openMapsBH() {
	window.location.href = "maps:Joeys+Pizza&address=8106,Long+Beach+Blvd,Long+Beach+Township,NJ";
}

// function openMapsShip() {
// 	appAvailability.check(
// 	    'maps://', // URI Scheme
// 	    function() {  // Success callback
// 	        window.open('maps://maps.apple.com/?q=Joeys+Pizza&address=2201,Long+Beach+Blvd,Beach+Haven,NJ', '_system');
// 	    function() {  // Error callback
// 	        window.open('maps.apple.com/?q=Joeys+Pizza&address=2201,Long+Beach+Blvd,Beach+Haven,NJ','_system');
// 	    }
// 	);
// }

// function openMapsBH() {
// 	appAvailability.check(
// 	    'maps://', // URI Scheme
// 	    function() {  // Success callback
// 	        window.open('maps://maps.apple.com/?q=Joeys+Pizza&address=8106,Long+Beach+Blvd,Long+Beach+Township,NJ', '_system');
// 	    function() {  // Error callback
// 	        window.open('maps.apple.com/?q=Joeys+Pizza&address=8106,Long+Beach+Blvd,Long+Beach+Township,NJ','_system');
// 	    }
// 	);
// }