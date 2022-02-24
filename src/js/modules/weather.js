let apiKey = "f369405c8397d0b1843aaff0d07491df"

async function getCityCoordinates(city) {
    try {
        let apiLink = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
        let response = await fetch(apiLink, { mode: "cors" })
        let data = await response.json()
        let location = { city: data[0].name, state: data[0].state, country: data[0].country }
        let lat = data[0].lat
        let lon = data[0].lon
        let weather = await getWeatherData(lat, lon)
        return { location, weather }
    } catch (error) {
        alert("City not found")
    }
}

async function getWeatherData(lat, lon) {
    let apiLink = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${apiKey}`
    let response = await fetch(apiLink, { mode: "cors" })
    let data = convertData(await response.json())
    return data
}

function convertData(data) {
    let {
        temp: temperature,
        weather: [{ description, icon: iconId }],
        feels_like: feelsLike,
        humidity,
        wind_speed: windSpeed,
    } = data.current
    let chanceOfRain = data.daily[0].pop * 100

    return { temperature, description, feelsLike, humidity, chanceOfRain, windSpeed, iconId }
}

export { getCityCoordinates }
