"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (title) {
        this.title = this.title;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setNpages = function (nPages) {
        this.nPages = this.nPages;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = this.isbn;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = this.author;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = this.editorial;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        return "Title - " + this.getTitle() + "\n" + "Numer of  Pages -" + this.getNpages() + "\n"
            + "ISBN - " + this.getIsbn() + "\n" + "Author - " + this.getAuthor() + "\n" + "Editorial - "
            + this.getEditorial() + "\n"
            + "\n";
    };
    return Book;
}());
exports.Book = Book;
