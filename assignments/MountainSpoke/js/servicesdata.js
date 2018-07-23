var serviceRequest= new XMLHttpRequest();
    serviceRequest.open('GET','https://sugarlessbird.github.io/assignments/MountainSpoke/data/service.json');
    
    serviceRequest.send();

    serviceRequest.onload = function() {
      var data = JSON.parse(serviceRequest.responseText);
        console.log(data);
        document.getElementById('row2').innerHTML=data.Services[0].name;
        document.getElementById('parts').innerHTML=data.Services[0].parts;
        document.getElementById('labor').innerHTML=data.Services[0].labor;
        document.getElementById('total').innerHTML=data.Services[0].total;
        
        document.getElementById('row3').innerHTML=data.Services[1].name;
        document.getElementById('parts').innerHTML=data.Services[1].parts;
        document.getElementById('labor').innerHTML=data.Services[1].labor;
        document.getElementById('total').innerHTML=data.Services[1].total;
        
        document.getElementById('row4').innerHTML=data.Services[2].name;
        document.getElementById('parts').innerHTML=data.Services[2].parts;
        document.getElementById('labor').innerHTML=data.Services[2].labor;
        document.getElementById('total').innerHTML=data.Services[2].total;
        
        document.getElementById('row5').innerHTML=data.Services[3].name;
        document.getElementById('parts').innerHTML=data.Services[3].parts;
        document.getElementById('labor').innerHTML=data.Services[3].labor;
        document.getElementById('total').innerHTML=data.Services[3].total;
        
        document.getElementById('row5').innerHTML=data.Services[4].name;
        document.getElementById('parts').innerHTML=data.Services[4].parts;
        document.getElementById('labor').innerHTML=data.Services[4].labor;
        document.getElementById('total').innerHTML=data.Services[4].total;
        
        document.getElementById('row6').innerHTML=data.Services[5].name;
        document.getElementById('parts').innerHTML=data.Services[5].parts;
        document.getElementById('total').innerHTML=data.Services[5].total;
        
        document.getElementById('row7').innerHTML=data.Services[6].name;
        document.getElementById('parts').innerHTML=data.Services[6].parts;
        document.getElementById('labor').innerHTML=data.Services[6].labor;
        document.getElementById('total').innerHTML=data.Services[6].total;
    }