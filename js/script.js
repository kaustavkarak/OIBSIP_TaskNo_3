function convertTemperature() {
  const inputTemperature = parseFloat(
    document.getElementById("inputTemperature").value
  );
  const unitFrom = document.getElementById("unitFrom").value;
  const resultElement = document.getElementById("result");

  if (unitFrom === "celsius") {
    const fahrenheit = (inputTemperature * 9) / 5 + 32;
    const kelvin = inputTemperature + 273.15;
    resultElement.innerHTML = `Fahrenheit: ${fahrenheit.toFixed(
      2
    )}°F<br>Kelvin: ${kelvin.toFixed(2)}K`;
  } else if (unitFrom === "fahrenheit") {
    const celsius = ((inputTemperature - 32) * 5) / 9;
    const kelvin = ((inputTemperature - 32) * 5) / 9 + 273.15;
    resultElement.innerHTML = `Celsius: ${celsius.toFixed(
      2
    )}°C<br>Kelvin: ${kelvin.toFixed(2)}K`;
  } else if (unitFrom === "kelvin") {
    const celsius = inputTemperature - 273.15;
    const fahrenheit = ((inputTemperature - 273.15) * 9) / 5 + 32;
    resultElement.innerHTML = `Celsius: ${celsius.toFixed(
      2
    )}°C<br>Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  } else {
    resultElement.innerHTML =
      "Invalid input or No unit Selection." +
      "<br />" +
      "Enter temperature in Numbers and Select an unit";
  }
}

function resetAll() {
  document.getElementById("inputTemperature").value = "";
  document.getElementById("unitFrom").value = "celsius";
  document.getElementById("result").innerHTML = "";
  document.getElementById("inputTemperature").value = "";
  document.getElementById("unitFrom").selectedIndex = 0;
}
