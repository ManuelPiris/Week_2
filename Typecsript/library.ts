import {Book} from "./book";

export class Library{
    private book: Book[];
    private address: string;
    private manager: string;
        constructor(books:Book[], address:string, manager:string){
            this.book = books;
            this.address = address;
            this.manager = manager;
        }
        public setAddress(address:string):void{
            this.address = this.address;       
        }
        public getAddress():string{
            return this.address;
        }
        public setManager(manager:string):void{
            this.manager = this.manager;       
        }
        public getManager():string{
            return this.manager;
        }
        public toStringBook():string{
            let resultado:string = "";
    
        for(let i = 0; i < this.book.length; i++){
            resultado += "Book" + (i+1) + "\n" + this.book[i].toString() + "\n"; 
        } 
            return resultado;
        }
        public getNumberOfBook():number{
            return this.book.length;
        }
        public findByAuthor(author:string):Book[]{
            let nombreAuthor:Book[] = [];
           for( let j=0; j < this.book.length; j++){
               if (this.book[j].getAuthor() == author){
                    nombreAuthor.push(this.book[j])
               }
                }
                    return nombreAuthor;
            }      
}


