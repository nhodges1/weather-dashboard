var formInput = document.querySelector('.formInput');
var button = document.querySelector('.btn');

var citySearch = function() {
    
    button.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+formInput+'&appid=75a3cc3d216cd996d36d719ba932debd')
            .then(function(response) {
                // request was successful
                if (response.ok) {
                    response.json().then(function(data) {
                        
                    })
                } else {
                    alert("Error: City Not Found");
                }
            })
            .catch(function(error) {
                // Notice this '.catch()' getting chained onto the end of the '.then()' method
                alert("Unable to connect to OpenWeather");
            });
    })
};

citySearch();