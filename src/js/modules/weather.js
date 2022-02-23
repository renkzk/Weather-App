async function getData(city) {
    let apiKey = "f369405c8397d0b1843aaff0d07491df"
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    try {
        let response = await fetch(apiLink, { mode: "cors" })
        if (!response.ok) throw new Error(`City '${city}' not found`)
        let data = convertData(await response.json())
        return data
    } catch (error) {
        alert(error)
        return null
    }
}

function convertData(data) {
    // console.log(data)
    let {
        name: city,
        sys: { country },
        weather: [{ description: weather }],
        main: { temp: temperature, feels_like: feelsLike, humidity },
        wind: { speed: windSpeed },
    } = data
    return { city, country, weather, temperature, feelsLike, humidity, windSpeed }
}

export { getData }
