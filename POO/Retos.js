
class Person {
    constructor(altura, peso, edad, nacimiento,hobbies){
        this.altura = altura;
        this.peso = peso;
        this.edad = edad;
        this.nacimiento = nacimiento;
        this.hobbies = [hobbies];
    }
//METODOS
calcImc(){
    return parseInt(this.peso / (this.altura/100 * this.altura/100));
    }
calcEdad(){
    return 2022 - this.nacimiento;
    }
PrintAll(){
    let rest = "";
    for (let atributo in datos){
    rest = rest + atributo +  "-" + datos [atributo] + " \n ";
        }
    return rest;
    }
PrintHobbies(){
    return this.hobbies;
}
}

//MAIN
let datos = new Person(178,69,34,1988,["futbol","correr","saltar"]);

console.log(datos);
console.log(datos.calcImc());
console.log(datos.calcEdad());
console.log(datos.PrintAll());
console.log(datos.PrintHobbies());
