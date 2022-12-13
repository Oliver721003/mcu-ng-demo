import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.component.html',
  styleUrls: ['./book-form-page.component.css']
})
export class BookFormPageComponent {
  constructor(private router: Router, private bookService: BookService) {}

  onAdd(form: NgForm): void {
    const { name, author, company} = form.value;
    // const book = new Book(form.value);
    const book = new Book(name, author, company);
    this.bookService.add(book);
    this.router.navigate(['books']);
  }

  onCancel(): void {
    this.router.navigate(['books']);
  }
}
