document.getElementById("windchill").innerHTML=doInputOutput();


function doInputOutput() {
var high = parseFloat(document.getElementById('temp1').innerHTML);
var low = parseFloat(document.getElementById('temp2').innerHTML);
var speed = parseFloat(document.getElementById('speed').innerHTML);    
var avg = (high+low)/2;
var chill = windChill(avg, speed);
return chill;
}

/*
function (temp1, temp2) {
     tempF = temp1 - temp2 / 2;
 }
*/

function windChill(tempF, speed) {   
var windChillvalue = 35.74 + (0.6215 * tempF) - 35.75 * Math.pow(speed,.16) + 0.4275 * tempF * Math.pow(speed,.16);
var multiplier = Math.pow(10, 2);
windChillvalue = Math.round(windChillvalue * multiplier) / multiplier;
	/*if(windChillvalue>=70){
	windChillvalue = "Ewwww! It is <strong><font color=red>" + windChillvalue + " F</font></strong> Degrees with the Wind Chill!";
	}
	else{
	windChillvalue = "Brrrr! It is <strong><font color=blue>" + windChillvalue + " F</font></strong> Degrees with the Wind Chill!";
	}*/
var clean = parseInt(windChillvalue);    
return clean;
}
   
