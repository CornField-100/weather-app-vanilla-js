const API_KEY = "Secret key in env alr";
const cityLocation = "Paris";
const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityLocation}&aqi=yes`;

const fetchWeather = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Network response was not ok.");
        
        const data = await response.json();
        console.log(data);
        
        const {
            location: { name: city },
            current: { temp_c: temp, condition: { icon }, wind_kph: wind, humidity, uv, feelslike_c: feelslike }
        } = data;

        document.querySelector(".card-title").textContent = city;
        document.querySelector(".card-img").src = icon;

        const items = document.querySelectorAll(".list-group-item");
        items[0].textContent = `Temperature: ${temp}°C`;
        items[1].textContent = `Humidity: ${humidity}%`;
        items[2].textContent = `Feels like: ${feelslike}°C`;
        items[3].textContent = `Wind: ${wind} km/h`;
        items[4].textContent = `UV: ${uv}`;

    } catch (error) {
        console.error("Fetch error:", error);
    }
};

window.onload = fetchWeather;