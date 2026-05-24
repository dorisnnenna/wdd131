// Footer year
const currentyear = document.getElementById("currentyear");
currentyear.textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// Static weather values
const temperature = 20;
const windSpeed = 10;


// Wind chill function
function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    );
}


// Display wind chill
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
}

document.getElementById("windchill").textContent = windChill;