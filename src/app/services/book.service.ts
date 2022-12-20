import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';
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
    return this.httpClient.get<Book[]>(this._url).pipe(
      tap(books => console.log('Books List', books)),
      map(books => books.map(book => book.id || 0)),
      tap(ids => console.log('Books Id List', ids)),
      map(ids => Math.max(...ids) + 1),
      tap(id => console.log('New Books Id', id)),
      map(id => {
        book.id = id;
        return book;
      }),
      tap(book => console.log('New Book', book)),
      switchMap(
        book => this.httpClient.post<Book>(this._url, book)
      )
    );
  }

  update(index: number): void {
    console.log(`click edit button. index = ${index}`);
  }

  delete(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this._url}/${id}`);
  }
}
