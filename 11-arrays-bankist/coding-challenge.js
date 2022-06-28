'use strict';

// Coding Challenge #1

/*
const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach((dog, i) => {
    console.log(
      `Dog number ${i + 1} is ${
        dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy 🐶'
      }`
    );
  });
};
console.log('--- TEST DATA 1 ---');
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log('--- TEST DATA 2 ---');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Coding Challenge #2

/*
const calcAverageHumanAge = ages => {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(humanAge => humanAge >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
};

console.log('--- TEST DATA 1 ---');
console.log([5, 2, 4, 1, 15, 8, 3]);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log('--- TEST DATA 2 ---');
console.log([16, 6, 10, 5, 6, 1, 4]);
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

// Coding Challenge #3

/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

console.log('--- TEST DATA 1 ---');
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log('--- TEST DATA 2 ---');
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/
