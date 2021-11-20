let weather = {
    apiKey : "04f40a1a7cd8416bb22bee4d542fe666",
    fetchWeather : function (city) {
        
        fetch("https://api.weatherbit.io/v2.0/current?&city="+city+"&key=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather : function(data) {
        const {city_name ,rh, wind_spd , temp} = data.data[0];
        const {description , icon} = data.data[0].weather;
        console.log(city_name,rh,wind_spd,temp, icon,description);
        document.querySelector('.city').innerText = "Weather in " + city_name;
        document.querySelector('.iconweather').src = "https://www.weatherbit.io/static/img/icons/"+ icon +".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + " °C";
        document.querySelector('.humidity').innerText = "Humidity: " + rh + " %";
        document.querySelector('.wind').innerText = "Wind Speed: " + wind_spd + " km/h";
        document.querySelector('.weather').classList.remove("loading");

    },

    search : function (){
        this.fetchWeather(document.querySelector('.searchBar').value);
    }
};

let geocode = {
    reverseGeocode : function (latitude , longitude) {
        var api_key = '8ada655062634def8da80b05ae0e7347';


  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + api_key
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
    + '&no_annotations=1';

    // console.log(request_url);
    // console.log(decodeURIComponent(request_url));

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status === 200){ 
      // Success!
      var data = JSON.parse(request.responseText);
      //console.log(); // print the location
      weather.fetchWeather(data.results[0].components.city);
    } else if (request.status <= 500){ 
      // We reached our target server, but it returned an error
                           
      console.log("unable to geocode! Response code: " + request.status);
      var data = JSON.parse(request.responseText);
      console.log('error msg: ' + data.status.message);
    } else {
      console.log("server error");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log("unable to connect to server");        
  };

  request.send();  // make the request
    },

    GetLocation : function(){
        function success(data) {
            geocode.reverseGeocode(data.coords.latitude , data.coords.longitude);
        }
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, console.error);
        }
        else {
            weather.fetchWeather("Riyadh");
        }
       
    }
};

document.querySelector('.search button').addEventListener("click" , function (){
    weather.search();
})


document.querySelector('.searchBar').addEventListener("keyup" , function(event){
    if (event.key == "Enter") {
        weather.search();
    }

});

geocode.GetLocation();
