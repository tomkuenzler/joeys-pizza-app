function getDateTime() {
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  
  if(day <= 4) {
    if(hour >= 11 && hour < 22) {
      document.getElementById("open-sign").style.visibility = "visible";
    } else {
        document.getElementById("open-sign").style.visibility = "hidden";
    }       
  } else {
      if(hour >= 11 && hour < 23) {
      document.getElementById("open-sign").style.visibility = "visible";
    } else {
        document.getElementById("open-sign").style.visibility = "hidden";
    }
  }      
}

window.onload = getDateTime();