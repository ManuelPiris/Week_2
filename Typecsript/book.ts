export class Book{
    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;
        constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){
            this.title = title;
            this.nPages = nPages;
            this.isbn = isbn;
            this.author = author;
            this.editorial = editorial;
        }
        public setTitle(title:string):void{
            this.title = this.title;       
        }
        public getTitle():string{
            return this.title;
        }
        public setNpages(nPages:number):void{
        this.nPages = this.nPages;   
        }
        public getNpages():number{
            return this.nPages;
        }
        public setIsbn(isbn:string):void{
            this.isbn = this.isbn;   
        }
        public getIsbn():string{
             return this.isbn;
        }
        public setAuthor(author:string):void{
            this.author = this.author;   
        }
        public getAuthor():string{
             return this.author;
        }
        public setEditorial(editorial:string):void{
            this.editorial = this.editorial;   
        }
        public getEditorial():string{
             return this.editorial;
        }
        public toString(){
            return "Title - " + this.getTitle() + "\n" + "Numer of  Pages -" + this.getNpages() + "\n"
            + "ISBN - " + this.getIsbn() + "\n" + "Author - " + this.getAuthor() + "\n" + "Editorial - "
            + this.getEditorial() + "\n"
            + "\n";
        }
}




