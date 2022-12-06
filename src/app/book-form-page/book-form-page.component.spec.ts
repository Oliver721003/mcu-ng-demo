import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormPageComponent } from './book-form-page.component';

describe('BookFormPageComponent', () => {
  let component: BookFormPageComponent;
  let fixture: ComponentFixture<BookFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
