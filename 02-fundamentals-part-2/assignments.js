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
