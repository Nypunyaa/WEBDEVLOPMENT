// script.js
function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");

    // Validate the input
    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let celsius, fahrenheit, kelvin;

    // Convert based on the selected unit
    if (unitSelect === "celsius") {
        celsius = temperature;
        fahrenheit = (temperature * 9/5) + 32;
        kelvin = temperature + 273.15;
    } else if (unitSelect === "fahrenheit") {
        celsius = (temperature - 32) * 5/9;
        fahrenheit = temperature;
        kelvin = (temperature - 32) * 5/9 + 273.15;
    } else if (unitSelect === "kelvin") {
        celsius = temperature - 273.15;
        fahrenheit = (temperature - 273.15) * 9/5 + 32;
        kelvin = temperature;
    }

    // Display the result
    resultDiv.innerHTML = `
        ${temperature}° ${unitSelect.charAt(0).toUpperCase() + unitSelect.slice(1)} is:
        <ul>
            <li>${celsius.toFixed(2)}° Celsius</li>
            <li>${fahrenheit.toFixed(2)}° Fahrenheit</li>
            <li>${kelvin.toFixed(2)}° Kelvin</li>
        </ul>
    `;
}
