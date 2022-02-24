import * as weather from "./modules/weather"
import * as dom from "./modules/dom"

let searchInput = document.querySelector("#search-input")
let searchBar = document.querySelector("#search-bar")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    getCityWeatherData(searchInput.value)
    searchInput.value = ""
})

async function getCityWeatherData(city) {
    let data = await weather.getCityCoordinates(city)
    console.log(data)
    dom.renderData(data)
}

getCityWeatherData("Naples")
