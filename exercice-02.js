const temperatures = [-5, 10, 22, 34];

function celsiusVersFahrenheit(celsius) {
    let result = celsius * 9 / 5 + 32;
    return result;
}

for (let index = 0; index < temperatures.length; index++) {
    console.log(celsiusVersFahrenheit(temperatures[index]));
}

function decrireTemperature(celsius) {
    if (celsius < 10) {
        return "Froid";
    } else if (celsius <= 25) {
        return "Doux";
    } else {
        return "Chaud";
    }
}

for (let index = 0; index < temperatures.length; index++) {
    console.log(decrireTemperature(temperatures[index]));
}