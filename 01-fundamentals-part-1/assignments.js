// Values and Variables

const country = 'Russia';
const continent = 'Eurasia';
let population = 145;

console.log(country);
console.log(continent);
console.log(population);

// Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var

language = 'russian';

// Basic Operators

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

// const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
// console.log(description);

// Strings and Template Literals

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
