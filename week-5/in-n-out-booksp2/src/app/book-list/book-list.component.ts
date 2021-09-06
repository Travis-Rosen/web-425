// Author: Travis Rosen
// Date: 09/04/2021
// Name: book-list.component.ts
// Description: Book list component

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;


  //Calling getBooks function to map to this.books
  constructor(private bookService: BooksService) {
    this.books = this.bookService.getBooks();
   }

  ngOnInit(): void {
  }
  //
  showBookDetails(isbn: string) {
    this.book = this.bookService.getBook(isbn);
    console.log(this.book);
  }
}
