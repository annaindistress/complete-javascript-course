'use strict';

// Functions

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

// Arrow Functions

const percentageOfWorld3 = population => population / 7900 * 100;

const finlandPercentageOfWorld3 = percentageOfWorld3(6);
const germanyPercentageOfWorld3 = percentageOfWorld3(83);
const portugalPercentageOfWorld3 = percentageOfWorld3(10);

console.log(finlandPercentageOfWorld3, germanyPercentageOfWorld3, portugalPercentageOfWorld3);

// Functions Calling Other Functions

function describePopulation (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

console.log(describePopulation('Finland', 6));
console.log(describePopulation('Germany', 83));
console.log(describePopulation('Portugal', 10));

// Introduction to Arrays

const population = [6, 83, 10, 143];
console.log(population.length === 4);

const percentages = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[2]),
    percentageOfWorld1(population[3])
];
console.log(percentages);

// Basic Array Operations (Methods)

const neighbours = ['Belarus', 'China', 'Estonia'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop('Utopia');
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Belarus')] = 'Ukraine';
console.log(neighbours);

// Introduction to Objects

const myCountry = {
    country: 'Georgia',
    capital: 'Tbilisi',
    language: 'georgian',
    population: 3,
    neighbours: ['Armenia', 'Turkey', 'Russia']
};

// Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
