var townRequest= new XMLHttpRequest();
    townRequest.open('GET','//byui-cit230.github.io/weather/data/towndata.json');
    
    townRequest.send();

    townRequest.onload = function() {
      var townData = JSON.parse(townRequest.responseText);
        console.log(townData);
        
        document.getElementById('franklin-events').innerHTML=townData.towns[0].events;
        document.getElementById('franklin-name').innerHTML=townData.towns[0].name;
        document.getElementById('franklin-rainfall').innerHTML=townData.towns[0].averageRainfall;
        document.getElementById('franklin-current-pop').innerHTML=townData.towns[0].currentPopulation;
        document.getElementById('franklin-motto').innerHTML=townData.towns[0].motto;
        document.getElementById('franklin-founded').innerHTML=townData.towns[0].yearFounded;
        
        
       
        document.getElementById('springfield-events').innerHTML=townData.towns[3].events;
        document.getElementById('springfield-name').innerHTML=townData.towns[3].name;
        document.getElementById('springfield-rainfall').innerHTML=townData.towns[3].averageRainfall;
        document.getElementById('springfield-current-pop').innerHTML=townData.towns[3].currentPopulation;
        document.getElementById('springfield-motto').innerHTML=townData.towns[3].motto;
        document.getElementById('springfield-founded').innerHTML=townData.towns[3].yearFounded;
        
        document.getElementById('greenville-events').innerHTML=townData.towns[1].events;
        document.getElementById('greenville-name').innerHTML=townData.towns[1].name;
        document.getElementById('greenville-rainfall').innerHTML=townData.towns[1].averageRainfall;
        document.getElementById('greenville-current-pop').innerHTML=townData.towns[1].currentPopulation;
        document.getElementById('greenville-motto').innerHTML=townData.towns[1].motto;
        document.getElementById('greenville-founded').innerHTML=townData.towns[1].yearFounded;
        
        
}