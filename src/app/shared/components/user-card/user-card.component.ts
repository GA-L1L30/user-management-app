import {Component, Input} from '@angular/core';
import {CompactNumberPipe} from '../../pipes/compact-number.pipe';

@Component({
  selector: 'app-user-card',
  imports: [
    CompactNumberPipe
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() title: number = 0;
  @Input() subtitle: string = '';

}
