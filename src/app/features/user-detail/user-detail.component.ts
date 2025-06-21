import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgIf, NgFor, DatePipe, NgClass, NgStyle} from '@angular/common';
import {BackgroundCardComponent} from '../../shared/components/background-card/background-card.component';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-user-detail',
  imports: [NgIf, NgFor, DatePipe, BackgroundCardComponent, NgClass, NgStyle],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
  standalone: true,
})
export class UserDetailComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() customStyle: any = {};
  @Input() user: any = {
    name: {first: 'Alexander', last: ''},
    email: 'john.smith@gmail.com',
    dob: {date: '1993-03-12T00:00:00.000Z'},
    location: {
      street: {number: 1600, name: 'Pennsylvania Avenue NW'},
      city: 'Washington',
      state: 'DC',
      postcode: 20500,
    },
    phone: '(555) 123-4567',
    picture: {large: 'https://randomuser.me/api/portraits/women/44.jpg'},
  };

  cats = [
    {name: 'Gibran & Juan', image: 'https://i.imgur.com/vAgp2j0.jpeg'},
    {name: 'Felipe', image: 'https://i.imgur.com/JjSRfC3.jpeg'},
    {name: 'Sebastian', image: 'https://i.imgur.com/uR3Tz2y.jpeg'},
    {name: 'Juliana & Alejandra', image: 'https://i.imgur.com/I2T2iWd.jpeg'},
  ];

  @Output() goBack = new EventEmitter<unknown>();

  constructor() {
  }

  ngOnInit() {
  }
}
