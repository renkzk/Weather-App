import { format } from "date-fns"

function renderData(data) {
    let location = document.querySelector("#location")
    let weather = document.querySelector("#weather")
    let date = document.querySelector("#date")
    let temperature = document.querySelector("#temperature")
    let feelsLike = document.querySelector("#feelsLike")
    let humidity = document.querySelector("#humidity")
    let windSpeed = document.querySelector("#windSpeed")

    location.textContent = data.city + ", " + data.country
    weather.textContent = data.weather.charAt(0).toUpperCase() + data.weather.slice(1)
    let todayDate = format(new Date(), " eee, M MMMM, HH:mm ")
    date.textContent = todayDate
    temperature.textContent = Math.floor(data.temperature) + " °C"
    feelsLike.textContent = Math.floor(data.feelsLike) + " °C"
    humidity.textContent = Math.floor(data.humidity) + " %"
    windSpeed.textContent = Math.floor(data.windSpeed) + " km/h"
}

export { renderData }
