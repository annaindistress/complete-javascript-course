'use strict';

// Functions

/*
function describeCountry (country, population, capitalCity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return description;
}

const finland = describeCountry('Finland', 6, 'Helsinki');
const germany = describeCountry('Germany', 83, 'Berlin');
const portugal = describeCountry('Portugal', 10, 'Lisbon');
console.log(finland);
console.log(germany);
console.log(portugal);
*/

// Function Declaration vs. Expression

function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}

const finlandPercentageOfWorld1 = percentageOfWorld1(6);
const germanyPercentageOfWorld1 = percentageOfWorld1(83);
const portugalPercentageOfWorld1 = percentageOfWorld1(10);

console.log(finlandPercentageOfWorld1, germanyPercentageOfWorld1, portugalPercentageOfWorld1);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const finlandPercentageOfWorld2 = percentageOfWorld1(6);
const germanyPercentageOfWorld2 = percentageOfWorld1(83);
const portugalPercentageOfWorld2 = percentageOfWorld1(10);

console.log(finlandPercentageOfWorld2, germanyPercentageOfWorld2, portugalPercentageOfWorld2);
