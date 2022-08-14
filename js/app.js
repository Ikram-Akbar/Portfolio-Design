function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Rasel";
  let age = 21;
}

sayHi();
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}


const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

+true;
!"Rasel";


let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);


let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
console.log(freddie.colorChange("orange"));
let greeting;
greetign = {}; // Typo!
console.log(greetign);
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";






function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Rasel", "Kazi");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());




function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const Rasel = new Person("Rasel", "Kazi");
const sarah = Person("Sarah", "Smith");

console.log(Rasel);
console.log(sarah);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);



function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Rasel";
const age = 21;

getPersonInfo`${person} is ${age} years old`;



function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });

function getAge(...args) {
  console.log(typeof args);
}

getAge(21);



function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();