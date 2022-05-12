import {Contacts} from "./contacts";
import {Person} from "./person";

let persona3 = new Person("Laura",28,"Calle Almonte");
let persona4 = new Person("Don Alvaro",28,"Sevilla");
let persona5 = new Person("Jorge",30,"Cantabria");
let persona6 = new Person("Ana",29,"Mostoles");
let dat = new Contacts();

dat.people.push(persona3,persona4,persona5,persona6);
console.log(dat.people);



