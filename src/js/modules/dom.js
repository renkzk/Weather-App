import { format } from "date-fns"

function renderData(data) {
    let location = document.querySelector("#location")
    let weather = document.querySelector("#weather")
    let weatherIcon = document.querySelector("#weather-svg")
    let date = document.querySelector("#date")
    let temperature = document.querySelector("#temperature")
    let feelsLike = document.querySelector("#feelsLike")
    let humidity = document.querySelector("#humidity")
    let chanceOfRain = document.querySelector("#chanceOfRain")
    let windSpeed = document.querySelector("#windSpeed")

    location.textContent = `${data.location.city}, ${
        data.location.state === data.location.city ? "" : data.location.state + ", "
    } ${data.location.country}`

    let todayDate = format(new Date(), " eee, M MMMM, HH:mm ")
    date.textContent = todayDate

    temperature.textContent = Math.floor(data.weather.temperature) + " °C"

    let weatherDesc =
        data.weather.description.charAt(0).toUpperCase() + data.weather.description.slice(1)
    weather.textContent = weatherDesc

    switch (data.weather.description) {
        case "clear sky":
            weatherIcon.src = "./svg/sun.svg"
            break
        case "few clouds":
            weatherIcon.src = "./svg/brokenClouds.svg"
            break
        case "broken clouds":
            weatherIcon.src = "./svg/brokenClouds.svg"
            break
        case "scattered clouds":
            weatherIcon.src = "./svg/brokenClouds.svg"
            break
        case "overcast clouds":
            weatherIcon.src = "./svg/overcastClouds.svg"
            break
        case "light rain":
            weatherIcon.src = "./svg/lightRain.svg"
            break
        case "clear sky":
            weatherIcon.src = "./svg/sun.svg"
            break
    }

    feelsLike.textContent = Math.floor(data.weather.feelsLike) + " °C"

    humidity.textContent = Math.floor(data.weather.humidity) + " %"

    chanceOfRain.textContent = data.weather.chanceOfRain + " %"

    windSpeed.textContent = Math.floor(data.weather.windSpeed) + " km/h"
}

export { renderData }
