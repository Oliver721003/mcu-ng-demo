import { BookFormPageComponent } from './book-form-page/book-form-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './books-page/books-page.component';

const routes: Routes = [
  { path: 'books', component: BooksPageComponent },
  { path: 'book/form', component: BookFormPageComponent },
  { path: 'book/edit/:id', component: BookFormPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
