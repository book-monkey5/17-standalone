import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BookStoreService } from '../../shared/book-store.service';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [
    NgIf, NgFor, AsyncPipe,
    BookListItemComponent
  ]
})
export class BookListComponent {
  books$ = this.service.getAll();

  constructor(private service: BookStoreService) {}
}
