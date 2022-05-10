const {contacts} = require("./contacts");
const {Person} = require("./Person");

let pers = new Person()

let persona2 = new Person("Alberto",193,78,65,1965,["caminar","andar","spinning"], "Prueba Reto 6");
let persona3 = new Person("Rafa",165,50,70,1999,["esquiar","bici","remar"], "Prueba Reto 7");
let persona4 = new Person("Javier",200,150,25,2001,["hablar","cantar","escribir"], "Prueba Reto 8");
let con = new contacts ();

con.arr.push(persona2,persona3,persona4);
console.log(con);
con.printPerson();
//console.log((persona2.hobbies),(persona3.hobbies),(persona4.hobbies));







