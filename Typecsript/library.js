"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.book = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddress = function (address) {
        this.address = this.address;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = this.manager;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toStringBook = function () {
        var resultado = "";
        for (var i = 0; i < this.book.length; i++) {
            resultado += "Book" + (i + 1) + "\n" + this.book[i].toString() + "\n";
        }
        return resultado;
    };
    Library.prototype.getNumberOfBook = function () {
        return this.book.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var nombreAuthor = [];
        for (var j = 0; j < this.book.length; j++) {
            if (this.book[j].getAuthor() == author) {
                nombreAuthor.push(this.book[j]);
            }
        }
        return nombreAuthor;
    };
    return Library;
}());
exports.Library = Library;
