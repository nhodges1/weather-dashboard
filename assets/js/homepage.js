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

// search history display
function renderSearchHistory() {
    searchHistoryContainer.innerHTML = ''; 

    // start at the end of history array
    for (var i = searchHistory.length - 1; i >= 0; i--) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-controls', 'today forecast');
        btn.classList.add('history-btn', 'btn-history');

        // data-search allows access to city name
        btn.setAttribute('data-search', searchHistory[i]);
        btn.textContent = searchHistory[i];
        searchHistoryContainer.append(btn);
    }
}

// update history in local storage
function appendToHistory(search) {
    // if there is no search term return the function
    if (searchHistory.indexOf(search) !== -1) {
        return;
    }
    searchHistory.push(search);

    localStorage.setItem('search-history', JSON.stringify(searchHistory));
    renderSearchHistory();
}

// search history from local storage
function initSearchHistory() {
    var storedHistory = localStorage.getItem('search-history');
    if (storedHistory) {
        searchHistory = JSON.parse(storedHistory);
    }
    renderSearchHistory();
}

// display current weather data fetched
function renderCurrentWeather (city, weather, timezone) {
    var date = dayjs().tz(timezone).format('M/D/YYYY');

    // store response data from fetch in variables
    var tempF = weather.temp;
    var windMph = weather.wind_speed;
    var humidity = weather.humidity;
    var uvi = weather.uvi;
    var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    var iconDescription = weather.weather[0].description || weather[0].main;

    var card = document.createElement('div');
    var cardBody = document.createElement('div');

    var heading = document.createElement('h2');
    var weatherIcon = document.createElement('img');
    var tempEl = document.createElement('p');
    var windEl = document.createElement('p');
    var humidityEl = document.createElement('p');
    var uvEl = document.createElement('p');
    var uviBadge = document.createElement('button');

    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    card.append(cardBody);

    heading.setAttribute('class', 'card');
    tempEl.setAttribute('class', 'card-text');
    windEl.setAttribute('class', 'card-text');
    humidityEl.setAttribute('class', 'card-text');

    heading.textContent = `${city} (${date})`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', iconDescription);
    weatherIcon.setAttribute('class', 'weather-img');
    heading.append(weatherIcon);
    tempEl.textContent = `Temp: ${tempF}°F`;
    windEl.textContent = `Wind: ${windMph} MPH`;
    humidityEl.textContent = `Humidity: ${humidity} %`;
    cardBody.append(heading, tempEl, windEl, humidityEl);

    uvEl.textcontent = 'UV Index: ';
    uviBadge.classList.add('bth', 'btn-sm');

    if (uvi < 3) {
        uviBadge.classList.add('btn-success');
    } else if (uvi < 7) {
        uviBadge.classList.add('btn-warning');
    } else {
        uviBadge.classList.add('btn-danger');
    }

    uviBadge.textContent = uvi;
    uvEl.append(uviBadge);
    cardBody.append(uvEl);

    todayContainer.innerHTML = '';
    todayContainer.append(card);
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