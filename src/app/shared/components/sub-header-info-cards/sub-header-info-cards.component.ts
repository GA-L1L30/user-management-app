import {Component, Input} from '@angular/core';
import {BackgroundCardComponent} from '../background-card/background-card.component';
import {UserCardComponent} from '../user-card/user-card.component';
import {CapitalizePipe} from '../../pipes/capitalize.pipe';
import {MatCard} from '@angular/material/card';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-sub-header-info-cards',
  imports: [
    BackgroundCardComponent,
    UserCardComponent,
    CapitalizePipe,
    NgClass,
    NgStyle
  ],
  templateUrl: './sub-header-info-cards.component.html',
  styleUrl: './sub-header-info-cards.component.scss'
})
export class SubHeaderInfoCardsComponent {
  @Input() customClass: string = '';
  @Input() customStyle: any = {};

}
