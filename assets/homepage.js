var formInput = document.querySelector('.formInput')

var citySearch = function() {
    // format the weather api url
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=" + formInput.value + "&appid=628288e19078b9bbe2d723b6f7ef2029"
    
    fetch(apiUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    
                })
            } else {
                alert("Error: Github User Not Found");
            }
        })
        .catch(function(error) {
            // Notice this '.catch()' getting chained onto the end of the '.then()' method
            alert("Unable to connect to Github");
        });
};

citySearch();