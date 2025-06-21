import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-paginator',
  standalone: true,
  imports: [
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './footer-paginator.component.html',
  styleUrls: ['./footer-paginator.component.scss']
})
export class FooterPaginatorComponent {
  @Input() resultsPerPage: number = 10;
  @Output() resultsPerPageChange = new EventEmitter<number>();
  @Input() rowsPerPageOptions: number[] = [5, 10, 25, 50];
  @Input() totalRows: number = 0;
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() visiblePages: (number | string)[] = [];
  @Output() goToFirstPage = new EventEmitter<void>();
  @Output() previousPage = new EventEmitter<void>();
  @Output() goToPage = new EventEmitter<number | string>();
  @Output() nextPage = new EventEmitter<void>();
  @Output() goToLastPage = new EventEmitter<void>();
}
