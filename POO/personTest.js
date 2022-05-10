const {Person} = require("./Person");

let persona2 = new Person("Alberto",193,78,65,1965,["caminar","andar","spinning"], "Prueba Reto 6");


console.log(persona2);
console.log(persona2.calcImc());
console.log(persona2.calcEdad());
console.log(persona2.PrintAll());
console.log(persona2.PrintHobbies());
