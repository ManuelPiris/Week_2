"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var persona1 = new person_1.Person("Manuel", 34, "Calle Buenos Aires");
persona1.printName();
console.log(persona1.yearOfBirth(2022));
console.log(persona1.getAddress());
persona1.setAddress("Calle Locura Total");
console.log(persona1.getAddress());
