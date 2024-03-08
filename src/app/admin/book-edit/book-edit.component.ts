import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'bm-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  imports: [AsyncPipe, BookFormComponent],
  standalone: true
})
export class BookEditComponent {
  private service = inject(BookStoreService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  book$: Observable<Book> | undefined;
  isbn = input.required<string>()

  constructor() {
    effect(() => {
      this.book$ = this.service.getSingle(this.isbn());
    })
  }

  update(book: Book) {
    this.service.update(book).subscribe(updatedBook => {
      this.router.navigate(['/books', updatedBook.isbn]);
    });
  }
}
