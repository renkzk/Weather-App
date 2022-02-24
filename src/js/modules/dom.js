import { format } from "date-fns"
import * as weatherIcons from "./weatherIcons"

function renderData(data) {
    let location = document.querySelector("#location")
    let weather = document.querySelector("#weather")
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

    weatherIcons.render(data.weather.description)

    feelsLike.textContent = Math.floor(data.weather.feelsLike) + " °C"

    humidity.textContent = Math.floor(data.weather.humidity) + " %"

    chanceOfRain.textContent = data.weather.chanceOfRain + " %"

    windSpeed.textContent = Math.floor(data.weather.windSpeed) + " km/h"
}

export { renderData }
