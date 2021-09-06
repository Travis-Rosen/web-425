// Author: Travis Rosen
// Date: 09/04/2021
// Name: book-list.component.ts
// Description: Book list component

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


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
  constructor(private bookService: BooksService, private dialog: MatDialog) {
    this.books = this.bookService.getBooks();
   }

  ngOnInit(): void {
  }
  //
  showBookDetails(isbn: string) {
    this.book = this.bookService.getBook(isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })
    console.log(this.book);
    //Calling function to set book variable to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book=null;
      }
    });
  }
}
