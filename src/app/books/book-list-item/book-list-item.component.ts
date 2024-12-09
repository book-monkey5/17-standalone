import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IsbnPipe } from '../../shared/isbn.pipe';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css',
  imports: [NgIf, NgFor, RouterLink, IsbnPipe]
})
export class BookListItemComponent {
  @Input() book?: Book;
}
