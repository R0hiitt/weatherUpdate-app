var inputBox = document.querySelector(".input-box");
var inputBtn = document.querySelector(".input-btn");

var weatherIcon = document.querySelector(".weather-icon");
var cityName = document.querySelector(".city");
var temperature = document.querySelector(".hero-container h1");
var humidity = document.querySelector(".humidity h3");
var wind = document.querySelector(".wind h3");
var description = document.querySelector(".description")

async function checkWeather(city) {
    const apiKey = "cd6b8e6d676f0bd098ed524a02b88711";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiurl);
    const respData = await response.json();

    cityName.innerHTML = respData.name;
    temperature.innerHTML = `${Math.round(respData.main.temp)}°C`;
    humidity.innerHTML = `${respData.main.humidity}%`;
    wind.innerHTML = `${respData.wind.speed}km/hr`;

    let weatherCondition = respData.weather[0].main;
    weatherIcon.src = `images/${weatherCondition}.png`;

    description.innerHTML = respData.weather[0].description; 

    console.log(respData);
}


inputBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
});


inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(inputBox.value);
    }
});
