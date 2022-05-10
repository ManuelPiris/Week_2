class Person {
    constructor(nombre,altura, peso, edad, nacimiento,hobbies, nuevoDato){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.edad = edad;
        this.nacimiento = nacimiento;
        this.hobbies = [hobbies];
        this.nuevoDato = nuevoDato;
    }
calcImc(){
    return parseInt(this.peso / (this.altura/100 * this.altura/100));
    }
calcEdad(){
    let fecha= new Date().getFullYear();
    let fechaResult = fecha - this.nacimiento;
    return fechaResult;
    }

PrintAll(){
console.log("Nombre" + " - " + this.nombre  + "\n" + "Altura" + " - " + this.altura  +"\n" +   "Peso" + " - " + this.peso  +"\n" +   "Edad" + " - " + this.edad  +"\n" +   "Nacimiento" + " - " 
+ this.nacimiento  +"\n" +   "Hobbies" + " - " + this.hobbies  +"\n" +   "NuevoDato" + " - "  +  this.nuevoDato + "\n" );
}
//ESTA ES LA MANERA QUE HABIA INTENTADO HACERLO,FUNCIONA PERO FALLA LUEGO AL CAMBIARLO EN PERSONTEST
//PrintAll(){
//   let rest = "";
//   for (let atributo in datos){
//  rest = rest + atributo +  "-" + datos[atributo] + " \n ";
//      }
//return rest;
// }
PrintHobbies(hobbies){
    return this.hobbies;
    }
}

//let datos = new Person ("Juan",178,69,34,1988,["futbol","correr","saltar"],"Reto");

//console.log(datos);
//console.log(datos.calcImc());
//console.log(datos.calcEdad());
//datos.PrintAll();
//console.log(datos.PrintHobbies());

module.exports.Person = Person;
