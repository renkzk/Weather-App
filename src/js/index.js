import weather from "./modules/weather"

let searchInput = document.querySelector("#search-input")
let searchBar = document.querySelector("#search-bar")
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    getData()
})

async function getData() {
    let data = await weather.getData(searchInput.value)
    console.log(data)
}
