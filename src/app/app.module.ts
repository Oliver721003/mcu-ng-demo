import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookFormPageComponent } from './book-form-page/book-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookFormPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
