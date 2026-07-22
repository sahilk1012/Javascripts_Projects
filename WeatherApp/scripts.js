const apikey = "db006642d52f0f87b8f8ff99481ead83";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
        data.wind.speed + " Km/h";

    const weatherMain = data.weather[0].main;

    if (weatherMain === "Clouds") {
        weatherIcon.src = "./weather-app-img/clouds.png";
    } 
    else if (weatherMain === "Clear") {
        weatherIcon.src = "./weather-app-img/clear.png";
    } 
    else if (weatherMain === "Rain") {
        weatherIcon.src = "./weather-app-img/rain.png";
    } 
    else if (weatherMain === "Drizzle") {
        weatherIcon.src = "./weather-app-img/drizzle.png";
    } 
    else if (weatherMain === "Mist") {
        weatherIcon.src = "./weather-app-img/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});