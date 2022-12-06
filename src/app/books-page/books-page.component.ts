import { BookService } from './../services/book.service';
import { Component } from '@angular/core';
import { Book } from '../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  constructor(private router: Router, protected bookService: BookService) {}

  onSearch(): void {
    this.bookService.search();
  }

  onAdd(): void {
    this.router.navigate(['book', 'form']);
  }

  onEdit(index: number): void {
    this.bookService.update(index);
  }

  onDelete(index: number): void {
    this.bookService.delete(index);
  }
}
