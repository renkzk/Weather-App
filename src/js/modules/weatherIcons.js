function render(weatherCase) {
    let weatherIcon = document.querySelector("#weather-svg")
    if (weatherCase.includes("sky")) {
        weatherIcon.src = "./svg/sun.svg"
    }
    if (weatherCase.includes("clouds")) {
        weatherIcon.src = "./svg/fewClouds.svg"
    }
    if (weatherCase.includes("overcast clouds")) {
        weatherIcon.src = "./svg/overcastClouds.svg"
    }
    if (weatherCase.includes("rain")) {
        weatherIcon.src = "./svg/lightRain.svg"
    }
    // if (weatherCase.includes("")) {
    //     weatherIcon.src = "./svg/"
    // }
    // if (weatherCase.includes("")) {
    //     weatherIcon.src = "./svg/"
    // }
    // if (weatherCase.includes("")) {
    //     weatherIcon.src = "./svg/"
    // }
    // if (weatherCase.includes("")) {
    //     weatherIcon.src = "./svg/"
    // }
    // if (weatherCase.includes("")) {
    //     weatherIcon.src = "./svg/"
    // }
    // if (weatherCase.includes("")) {
    //     weatherIcon.src = "./svg/"
    // }
}

export { render }
