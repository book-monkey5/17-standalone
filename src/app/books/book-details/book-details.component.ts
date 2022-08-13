import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { IsbnPipe } from '../../shared/isbn.pipe';
import { LoggedinOnlyDirective } from '../../shared/loggedin-only.directive';
import { ConfirmDirective } from '../../shared/confirm.directive';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [
    NgIf, NgForOf, DatePipe, AsyncPipe, RouterModule,
    IsbnPipe, LoggedinOnlyDirective, ConfirmDirective
  ]
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
    this.book$ = this.service.getSingle(isbn);
  }

  removeBook(isbn: string) {
    this.service.remove(isbn).subscribe(() => {
      this.router.navigateByUrl('/books');
    });
  }
}
