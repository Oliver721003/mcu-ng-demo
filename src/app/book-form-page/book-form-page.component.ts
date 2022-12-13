import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.component.html',
  styleUrls: ['./book-form-page.component.css']
})
export class BookFormPageComponent {
  bookName = 'Book A';

  author = '王五';

  company = '銘傳';

  constructor(private router: Router, private bookService: BookService) {}

  onAdd(): void {
    const book = new Book(this.bookName, this.author, this.company);
    this.bookService.add(book);
    this.router.navigate(['books']);
  }

  onCancel(): void {
    this.router.navigate(['books']);
  }
}
