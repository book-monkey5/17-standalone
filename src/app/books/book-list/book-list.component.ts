import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [
    AsyncPipe,
    BookListItemComponent
  ]
})
export class BookListComponent {
  books$: Observable<Book[]>;
  private service = inject(BookStoreService)

  constructor() {
    this.books$ = this.service.getAll();
  }
}
