import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { IsbnPipe } from '../../shared/isbn.pipe';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
  standalone: true,
  imports: [NgIf, NgForOf, RouterModule, IsbnPipe]
})
export class BookListItemComponent {
  @Input() book?: Book;
}
