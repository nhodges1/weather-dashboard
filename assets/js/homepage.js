var searchHistory = [];
var weatherApi= 'https://api.openweathermap.org';
var weatherApiKey= 'b8adb13d1cae612a2fdba72f3b012bf6';

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = doucment.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history');

// timezone plugins
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

//search history display
function renderSearchHistory() {
    searchHistoryContainer.innerHTML = ''; 

    for (var i = searchHistory.length - 1; i >= 0; i--) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-controls', 'today forecast');
        btn.classList.add('history-btn', 'btn-history');
    }
}

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