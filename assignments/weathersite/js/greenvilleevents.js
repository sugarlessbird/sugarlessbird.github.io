var townRequest= new XMLHttpRequest();
    townRequest.open('GET','http://byui-cit230.github.io/weather/data/towndata.json');
    
    townRequest.send();

    townRequest.onload = function() {
      var townData = JSON.parse(townRequest.responseText);
        console.log(townData);
         document.getElementById('greenville-events').innerHTML=townData.towns[1].events;
        document.getElementById('greenville-name').innerHTML=townData.towns[1].name;
        document.getElementById('greenville-rainfall').innerHTML=townData.towns[1].averageRainfall;
        document.getElementById('greenville-current-pop').innerHTML=townData.towns[1].currentPopulation;
        document.getElementById('greenville-motto').innerHTML=townData.towns[1].motto;
        document.getElementById('greenville-founded').innerHTML=townData.towns[1].yearFounded;
        
        
}