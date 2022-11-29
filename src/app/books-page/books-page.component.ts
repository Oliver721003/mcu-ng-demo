import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  bookName: string = 'Book A';
  author = '張三';

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
