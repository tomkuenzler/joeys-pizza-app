function myFunction() {
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  
  if(day <= 4) {
  	if(hour >= 11 && hour < 22) {
    	document.getElementById("demo").style.display = "initial";
    } else {
    		document.getElementById("demo").style.display = "none";
    }     	
  } else {
  		if(hour >= 11 && hour < 23) {
    	document.getElementById("demo").style.display = "initial";
    } else {
  			document.getElementById("demo").style.display = "none";
  	}
  }    	 
}

window.onload = myFunction();