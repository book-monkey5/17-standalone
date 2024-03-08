import { AsyncPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Component, effect, inject, input, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { ConfirmDirective } from '../../shared/confirm.directive';
import { IsbnPipe } from '../../shared/isbn.pipe';
import { LoggedinOnlyDirective } from '../../shared/loggedin-only.directive';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [
    DatePipe,
    AsyncPipe,
    NgOptimizedImage,
    RouterLink,
    IsbnPipe,
    LoggedinOnlyDirective,
    ConfirmDirective
  ]
})
export class BookDetailsComponent {
  private service = inject(BookStoreService);
  private router = inject(Router);
  book$: Observable<Book> | undefined;
  isbn = input.required<string>()

  constructor() {
    effect(() => {
      this.book$ = this.service.getSingle(this.isbn());
    })
  }

  removeBook(isbn: string) {
    this.service.remove(isbn).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }
}
