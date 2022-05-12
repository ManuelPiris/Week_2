"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = crearVector(n, k);
        function crearVector(n, k) {
            var numeros = [];
            for (var i = 0; i < n; i++) {
                numeros[i] = Math.round(Math.random() * k);
            }
            return numeros;
        }
    }
    Vector.prototype.Print = function () {
        console.log(this.elements);
    };
    Vector.prototype.Add = function (v1) {
        for (var j = 0; j < this.elements.length; j++) {
            this.elements[j] = this.elements[j] + v1.elements[j];
        }
        return this;
    };
    Vector.prototype.Subs = function (v1) {
        for (var j = 0; j < this.elements.length; j++) {
            this.elements[j] = this.elements[j] - v1.elements[j];
        }
        return this;
    };
    Vector.prototype.Mult = function (v1) {
        for (var j = 0; j < this.elements.length; j++) {
            this.elements[j] = this.elements[j] * v1.elements[j];
        }
        return this;
    };
    Vector.prototype.multNumber = function (n) {
        for (var j = 0; j < this.elements.length; j++) {
            this.elements[j] = this.elements[j] * n;
        }
        return this;
    };
    return Vector;
}());
exports.Vector = Vector;
var vector1 = new Vector(4, 34);
var v1 = new Vector(4, 50);
vector1.Print();
vector1.Add(v1);
vector1.Print();
vector1.Subs(v1);
vector1.Print();
vector1.Mult(v1);
vector1.Print();
vector1.multNumber(3);
vector1.Print();
