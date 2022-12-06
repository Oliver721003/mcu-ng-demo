import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  data: Book[] = [];

  constructor() { }

  search(): void {
    console.log('click search button');
  }

  add(book: Book): void {
    this.data.push(book);
  }

  update(index: number): void {
    console.log(`click edit button. index = ${index}`);
  }

  delete(index: number): void {
    this.data.splice(index, 1);
  }
}
