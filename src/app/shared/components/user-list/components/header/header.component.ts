import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  @Input() dateFrom: any;
  @Output() dateFromChange = new EventEmitter<any>();
  @Input() dateTo: any;
  @Output() dateToChange = new EventEmitter<any>();
  @Output() search = new EventEmitter<void>();

  onDateFromChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dateFromChange.emit(value);
  }

  onDateToChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dateToChange.emit(value);
  }
}
