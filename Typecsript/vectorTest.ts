import {Vector} from "./vector";

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