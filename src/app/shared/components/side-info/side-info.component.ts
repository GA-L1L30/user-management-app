import {Component, Input} from '@angular/core';
import {BackgroundCardComponent} from '../background-card/background-card.component';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-side-info',
  standalone: true,
  imports: [BackgroundCardComponent, NgFor],
  templateUrl: './side-info.component.html',
  styleUrl: './side-info.component.scss'
})
export class SideInfoComponent {
  @Input() user: any = {
    name: 'DAVID HURTADO',
    description: 'Cat enthusiast & full-time feline cuddler. 🐾',
    contacts: 50,
    contactsLabel: 'fifty',
    profileViews: 3,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    latest: [
      'New tips on cozy cat beds',
      'How to train your cat to high-five',
      'Best toys for lazy kitties',
      'Grooming guide for long-haired cats',
      'The science of cat purring'
    ],
    groups: [
      'Tabby Lovers United',
      'Senior Cats Appreciation Club',
      'Adopt Don\'t Shop Community'
    ]
  };
}
