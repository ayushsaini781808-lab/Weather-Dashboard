const apiKey = "837073616bb02357067eafb2c9c158ad";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const error = document.getElementById("error");
    const weatherCard = document.getElementById("weatherCard");

    error.textContent = "";
    weatherCard.style.display = "none";

    if(city === ""){
        error.textContent = "Please select a city";
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod != 200){
            throw new Error(data.message);
        }

        document.getElementById("city").textContent =
        `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").textContent =
        `${data.main.temp} °C`;

        document.getElementById("humidity").textContent =
        `${data.main.humidity}%`;

        document.getElementById("wind").textContent =
        `${data.wind.speed} m/s`;

        document.getElementById("condition").textContent =
        data.weather[0].description;

        weatherCard.style.display = "block";

    }
    catch(error){
        document.getElementById("error").textContent =
        "Error: " + error.message;
    }
}