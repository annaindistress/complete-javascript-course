'use strict';

// Scoping in Practice

/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // Creating NEW variable with the same name as outer scope's variable
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }

    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

// Hoisting and TDZ in Practice

/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addExpr);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

var addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart () {
    console.log('All products deleted!');
}

var x = 1;
let y = 2
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// The this Keyword in Practice

/*
console.log(this);

const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};

calcAgeArrow(1991);

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};

jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

// Regular Functions vs. Arrow Functions

/*
var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);

        // const self = this;
        // const isMillenial = function () {
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        const isMillenial = () => console.log(this.year >= 1981 && this.year <= 1996);

        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(1, 2);
addExpr(1, 2, 8, 12);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

addArrow(1, 2);
*/

// Primitives vs. Object

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
    family: ['Alice', 'Bob'],
}

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', me);

const friend1 = Object.assign({}, me);
friend1.age = 30;

console.log('Friend 1:', friend1);
console.log('Me', me);

friend1.family.push('Mary');
friend1.family.push('John');

console.log('Friend 1:', friend1);
