document.getElementById("windchill").innerHTML=doInputOutput();


function doInputOutput() {
var high = parseFloat(document.getElementById('high-temp').innerHTML);
var low = parseFloat(document.getElementById('low-temp').innerHTML);
var speed = parseFloat(document.getElementById('wind-speed').innerHTML);    
var avg = (high+low)/2;
var chill = windChill(avg, speed);
return chill;
}


function windChill(tempF, speed) {   
var windChillvalue = 35.74 + (0.6215 * tempF) - 35.75 * Math.pow(speed,.16) + 0.4275 * tempF * Math.pow(speed,.16);
var multiplier = Math.pow(10, 2);
windChillvalue = Math.round(windChillvalue * multiplier) / multiplier;
var clean = parseInt(windChillvalue);    
return clean;
}
   
 