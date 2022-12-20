import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { merge, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books$ = this.bookService.search();

  constructor(private router: Router, protected bookService: BookService) {}

  ngOnInit(): void {}

  onSearch(): void {
    this.bookService.search();
  }

  onAdd(): void {
    this.router.navigate(['book', 'form']);
  }

  onEdit(book: Book): void {
    this.router.navigate(['book', 'edit', book.id]);
  }

  onDelete(book: Book): void {
    if (book.id) {
      this.bookService.delete(book.id).pipe(
        tap(() => console.log(123))
      ).subscribe(
      );
    }
  }
}
