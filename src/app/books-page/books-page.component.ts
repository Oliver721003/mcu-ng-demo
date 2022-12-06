import { BookService } from './../services/book.service';
import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  constructor(protected bookService: BookService) {}

  onSearch(): void {
    this.bookService.search();
  }

  onAdd(): void {
    this.bookService.add(new Book('Book New', '王五', '銘傳'))
  }

  onEdit(index: number): void {
    this.bookService.update(index);
  }

  onDelete(index: number): void {
    this.bookService.delete(index);
  }
}
