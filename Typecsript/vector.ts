export class Vector{

    private elements:number[];

        constructor(n:number,k:number){
            this.elements = crearVector(n,k);

            function crearVector(n,k):number[]{
                let numeros:number[] = [] ;
                for(let i=0; i<n; i++){
                   numeros[i] = Math.round(Math.random()*k);
                }
                return numeros;
            }
        }  
            public Print():void{
                console.log(this.elements);
            } 
            public Add(v1:Vector):Vector{
                    for (let j=0; j<this.elements.length; j++){
                    this.elements[j] = this.elements[j] + v1.elements[j];
                    } 
                    return this;
            }
            public Subs(v1:Vector):Vector{
                for (let j=0; j<this.elements.length; j++){
                this.elements[j] = this.elements[j] - v1.elements[j];
                } 
                return this;
            }
            public Mult(v1:Vector):Vector{
                for (let j=0; j<this.elements.length; j++){
                this.elements[j] = this.elements[j] * v1.elements[j];
                } 
                return this;
            }
            public multNumber(n:number):Vector{
                for (let j=0; j<this.elements.length; j++){
                this.elements[j] = this.elements[j] * n;
                } 
                return this;
            }
}

let vector1 = new Vector (4,34);
let v1 = new Vector(4,50);
vector1.Print();
vector1.Add(v1);
vector1.Print();
vector1.Subs(v1);
vector1.Print();
vector1.Mult(v1);
vector1.Print();
vector1.multNumber(3);
vector1.Print();