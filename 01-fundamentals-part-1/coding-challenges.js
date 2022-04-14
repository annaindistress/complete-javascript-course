// Coding Challenge #1

// Test Data 1

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;


// Test Data 2

const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// Coding Challenge #2

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Coding Challenge #3

// Test Data 1

// const firstGameDolphins = 96;
// const secondGameDolphins = 108;
// const thirdGameDolphins = 89;

// const firstGameKoalas = 88;
// const secondGameKoalas = 91;
// const thirdGameKoalas = 110;

// Test Data 2

// const firstGameDolphins = 97;
// const secondGameDolphins = 112;
// const thirdGameDolphins = 101;

// const firstGameKoalas = 109;
// const secondGameKoalas = 95;
// const thirdGameKoalas = 123;

// Test Data 3

const firstGameDolphins = 97;
const secondGameDolphins = 112;
const thirdGameDolphins = 101;

const firstGameKoalas = 109;
const secondGameKoalas = 95;
const thirdGameKoalas = 106;

const averageDolphins = (firstGameDolphins + secondGameDolphins +thirdGameDolphins) / 3;
const averageKoalas = (firstGameKoalas + secondGameKoalas + thirdGameKoalas) / 3;

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}
