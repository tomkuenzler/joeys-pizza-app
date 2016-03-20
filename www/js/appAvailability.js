function openFB() {
	appAvailability.check('fb://', function(availability) {
		if(availability) { window.open('fb://profile/335761773297446', '_system', 'location=yes');}
		else{window.open('https://www.facebook.com/335761773297446','_system','location=yes');}
	});
}