'use strict';

// Using Google, StackOverflow and MDN

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitude(temps) {
    let min,
        max = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (typeof min !== 'number') min = currentTemp;
        if (typeof max !== 'number') max = currentTemp;

        if (max < currentTemp) max = currentTemp;
        if (min > currentTemp) min = currentTemp;
    }

    return max - min;
}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

const temperatures1 = [3, -2, -6, -1, 'error'];
const temperatures2 = [9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitudeNew(t1, t2) {
    const temps = t1.concat(t2);
    let min,
        max = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (typeof min !== 'number') min = currentTemp;
        if (typeof max !== 'number') max = currentTemp;

        if (max < currentTemp) max = currentTemp;
        if (min > currentTemp) min = currentTemp;
    }

    return max - min;
}

const amplitudeNew = calcTempAmplitudeNew(temperatures1, temperatures2);
console.log(amplitudeNew);

// Debugging with the Console and Breakpoints

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:')),
    };

    console.log(measurement);

    // console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

// console.log(measureKelvin());

// Coding Challenge #1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(temps) {
    let forecast = '...';
    for (let i = 0; i < temps.length; i++) {
        forecast += ` ${temps[i]}°C in ${i + 1} days ...`;
    }
    return forecast;
}

console.log(printForecast(data1));
console.log(printForecast(data2));
