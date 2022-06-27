'use strict';

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
