import {Library} from "./library";
import {Book} from "./book";

let book4 = new Book("Hola Javascript", 100, "CB12548-PED4587", "Mister Javas", "Master Martin");
let book5 = new Book("Suicidarse con Javascript", 200, "00128448-PED1257", "Manuel Piris", "Casa Central");


let libreria = new Library([book4,book5],"Calle 12 Horas Clase","Meta Tiro");

console.log(libreria.toStringBook());
console.log(libreria.getNumberOfBook());
console.log(libreria.findByAuthor("Mister Javas"));