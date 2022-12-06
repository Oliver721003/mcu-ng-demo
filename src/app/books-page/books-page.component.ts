import { Component } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  // books: Book[] = [];
  books = [
    new Book('Book X', '張三', '銘傳'),
    new Book('Book Y', '李四', '銘傳'),
    new Book('Book Z', '張三', '銘傳'),
  ];

  onSearch(): void {
    console.log('click search button');
  }

  onAdd(): void {
    console.log('click add button');
  }

  onEdit(index: number): void {
    console.log(`click edit button. index = ${index}`);
  }

  onDelete(index: number): void {
    console.log(`click delete button. index = ${index}`);
  }
}
