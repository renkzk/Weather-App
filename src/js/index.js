import * as weather from "./modules/weather"
import * as dom from "./modules/dom"

let searchInput = document.querySelector("#search-input")
let searchBar = document.querySelector("#search-bar")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    getData(searchInput.value)
})

async function getData(city) {
    let data = await weather.getData(city)
    console.log(data)
    dom.renderData(data)
}

getData("Naples")
