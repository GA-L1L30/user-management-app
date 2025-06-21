import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'App-background-card',
  imports: [
    NgClass,
    NgStyle,
    MatCard,
    MatCardContent
  ],
  templateUrl: './background-card.component.html',
  styleUrl: './background-card.component.scss',
  standalone: true
})
export class BackgroundCardComponent {
  @Input() customClass: string = '';
  @Input() customStyle: any = {};
}
