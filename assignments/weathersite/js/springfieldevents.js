var townRequest= new XMLHttpRequest();
    townRequest.open('GET','//byui-cit230.github.io/weather/data/towndata.json');
    
    townRequest.send();

    townRequest.onload = function() {
      var townData = JSON.parse(townRequest.responseText);
        console.log(townData);
        document.getElementById('springfield-events').innerHTML=townData.towns[3].events;
        document.getElementById('springfield-name').innerHTML=townData.towns[3].name;
        document.getElementById('springfield-rainfall').innerHTML=townData.towns[3].averageRainfall;
        document.getElementById('springfield-current-pop').innerHTML=townData.towns[3].currentPopulation;
        document.getElementById('springfield-motto').innerHTML=townData.towns[3].motto;
        document.getElementById('springfield-founded').innerHTML=townData.towns[3].yearFounded;
    }