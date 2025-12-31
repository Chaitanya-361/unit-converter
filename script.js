const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function() {
    const value = inputEl.value

    if(!value){
        return
    }

    const metersToFeet = (value * 3.28084).toFixed(2)
    const feetToMeters = (value * 0.3048).toFixed(2)

    const litersToGallons = (value * 0.2642).toFixed(2);
    const gallonsToLiters = (value * 3.78541).toFixed(2);

    const kilosToPounds = (value * 2.20462).toFixed(2);
    const poundsToKilos = (value * 0.453592).toFixed(2);

    const kmToMiles = (value * 0.621371).toFixed(2)
    const milesToKm = (value * 1.60934).toFixed(2)

    const lengthEl = document.getElementById("lengthResult")
    const volumeEl = document.getElementById("volumeResult")
    const massEl = document.getElementById("massResult")
    const distEl = document.getElementById("distResult")

    lengthEl.innerHTML = `${value} meters = ${metersToFeet} feet  <br>${value} feet = ${feetToMeters} meters`
    volumeEl.innerHTML = `${value} liters = ${litersToGallons} gallons <br>${value} gallons = ${gallonsToLiters} liters`
    massEl.innerHTML = `${value} kilos = ${kilosToPounds} pounds <br>${value} pounds = ${poundsToKilos} kilos`
    distEl.innerHTML = `${value} kilometers = ${kmToMiles} miles <br>${value} miles = ${milesToKm} kilometers`
})