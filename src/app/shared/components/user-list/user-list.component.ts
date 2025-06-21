import {Component, Inject, Injector, OnInit, signal, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../core/services/user.service';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {NgIf, NgFor, AsyncPipe, DatePipe, CommonModule} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {SpinnerComponent} from '../spinner/spinner.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatNativeDateModule} from '@angular/material/core';
import {HeaderComponent} from './components/header/header.component';
import {FooterPaginatorComponent} from './components/footer-paginator/footer-paginator.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-user-list',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatButton,
    DatePipe,
    SpinnerComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatNativeDateModule,
    CommonModule,
    HeaderComponent,
    FooterPaginatorComponent,
    MatIconModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  standalone: true
})
export class UserListComponent implements OnInit {

  currentPage = signal(1);
  resultsPerPage = 10;
  displayedColumns: string[] = ['#', 'Full Name', 'Email', 'Address', 'Phone Number', 'Birth Date', 'Actions'];

  users: any;
  loading: any;
  searchTerm = '';
  dateFrom: string = '';
  dateTo: string = '';
  rowsPerPageOptions = [5, 10, 25, 50];
  totalRows = 140;
  totalPages = Math.ceil(this.totalRows / this.resultsPerPage);
  visiblePages: (number | string)[] = [];

  @Output() userSelected = new EventEmitter<any>();

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.loading = this.userService.loading;
    this.getUsers();
    this.updateVisiblePages();
  }

  getUsers() {

    this.userService.getUsers(this.currentPage(), this.resultsPerPage);
    this.totalPages = Math.ceil(this.totalRows / this.resultsPerPage);
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    const pages: (number | string)[] = [];
    const current = this.currentPage();
    const total = this.totalPages;

    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      if (current <= 3) {
        pages.push(1, 2, 3, 4, '...', total);
      } else if (current >= total - 2) {
        pages.push(1, '...', total - 3, total - 2, total - 1, total);
      } else {
        pages.push(1, '...', current - 1, current, current + 1, '...', total);
      }
    }
    this.visiblePages = pages;
  }

  viewUserDetail(user: any) {
    this.userSelected.emit(user);
    localStorage.setItem('selectedUser', JSON.stringify(user));
  }

  nextPage() {
    if (this.currentPage() < this.totalPages) {
      this.currentPage.update(current => current + 1);
      this.getUsers();
      this.updateVisiblePages();
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(current => current - 1);
      this.getUsers();
      this.updateVisiblePages();
    }
  }

  onSearch() {
    this.getUsers();
  }

  onRowsPerPageChange() {
    this.currentPage.set(1);
    console.log(this.resultsPerPage)
    this.getUsers();
    this.updateVisiblePages();
  }

  goToFirstPage() {
    this.currentPage.set(1);
    this.getUsers();
    this.updateVisiblePages();
  }

  goToLastPage() {
    this.currentPage.set(this.totalPages);
    this.getUsers();
    this.updateVisiblePages();
  }

  goToPage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage()) {
      this.currentPage.set(page);
      this.getUsers();
      this.updateVisiblePages();
    }
  }

  onMatPaginatorChange(event: PageEvent) {
    this.resultsPerPage = event.pageSize;
    this.currentPage.set(event.pageIndex + 1);
    this.getUsers();
  }

  setRowsPerPage(newValue: number) {
    this.resultsPerPage = newValue;
    this.currentPage.set(1);
    this.getUsers();
    this.updateVisiblePages();
  }
}

