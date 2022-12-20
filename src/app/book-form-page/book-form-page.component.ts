import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.component.html',
  styleUrls: ['./book-form-page.component.css']
})
export class BookFormPageComponent implements OnInit {
  book?: Book;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(paramMap => +(paramMap.get('id') || '0')),
        switchMap(id => this.bookService.get(id))
      )
      .subscribe(book => this.book = book);
  }

  onAdd(form: NgForm): void {
    const { name, author, company} = form.value;
    // const book = new Book(form.value);
    const book = new Book(name, author, company);
    this.bookService.add(book).subscribe(
      () => this.router.navigate(['books'])
    );
  }

  onCancel(): void {
    this.router.navigate(['books']);
  }
}
