import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private _url = 'http://localhost:3000/books';

  data: Book[] = [];

  constructor(private httpClient: HttpClient) { }

  search(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this._url);
  }

  add(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this._url, book);
  }

  update(index: number): void {
    console.log(`click edit button. index = ${index}`);
  }

  delete(index: number): void {
    this.data.splice(index, 1);
  }
}
