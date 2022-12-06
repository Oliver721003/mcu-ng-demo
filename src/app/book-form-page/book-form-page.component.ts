import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-form-page',
  templateUrl: './book-form-page.component.html',
  styleUrls: ['./book-form-page.component.css']
})
export class BookFormPageComponent {
  constructor(private router: Router) {}

  onCancel(): void {
    this.router.navigate(['books']);
  }
}
