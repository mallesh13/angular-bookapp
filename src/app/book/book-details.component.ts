import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./book-details.component.html',
    //selector:'book-details'
})

export class BookDetailsComponent implements OnInit{
    book:Book;
    
    constructor(private bookService:BookService,
        private route:ActivatedRoute){}

    ngOnInit():void{
         
        this.route.paramMap.subscribe((map)=>{
            let bookId=Number(map.get("bookId"));
            console.log(bookId);

            this.bookService.findBookByid(bookId).subscribe((data)=>{
                this.book=data;
                console.log(data);
            });
        });
    }
   
}