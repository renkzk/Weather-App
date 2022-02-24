let apiKey = "f369405c8397d0b1843aaff0d07491df"

async function getCityCoordinates(city) {
    let apiLink = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    let response = await fetch(apiLink, { mode: "cors" })
    let data = await response.json()
    let location = { city: data[0].name, state: data[0].state, country: data[0].country }
    let lat = data[0].lat
    let lon = data[0].lon
    let weather = await getWeatherData(lat, lon)
    return { location, weather }
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
        weather: [{ description }],
        feels_like: feelsLike,
        humidity,
        wind_speed: windSpeed,
    } = data.current
    let chanceOfRain = data.daily[0].pop * 100

    return { temperature, description, feelsLike, humidity, chanceOfRain, windSpeed }
}

export { getCityCoordinates }

// async function getData(city) {
//     let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
//     try {
//         let response = await fetch(apiLink, { mode: "cors" })
//         if (!response.ok) throw new Error(`City '${city}' not found`)
//         let data = convertData(await response.json())
//         return data
//     } catch (error) {
//         alert(error)
//         return null
//     }
// }

// async function getMoreData(lat, lon) {
//     let apiLink = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
//     let response = await fetch(apiLink, { mode: "cors" })
//     if (!response.ok) throw new Error(`No`)
//     let data = await response.json()
//     console.log(data)
// }
