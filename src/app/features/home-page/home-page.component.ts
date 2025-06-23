import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from '../../core/services/user.service';

import {
  SubHeaderInfoCardsComponent
} from '../../shared/components/sub-header-info-cards/sub-header-info-cards.component';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {UserListComponent} from '../../shared/components/user-list/user-list.component';
import {SideInfoComponent} from '../../shared/components/side-info/side-info.component';
import {UserDetailComponent} from '../user-detail/user-detail.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [
    UserListComponent,
    NavbarComponent,
    SubHeaderInfoCardsComponent,
    UserDetailComponent,
    CommonModule,
    SideInfoComponent,
    MatButtonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent {
  loading: any;
  selectedUser = signal<any | null>(null);

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loading = this.userService.loading;
  }

  showUserDetail(user: any) {
    this.selectedUser.set(user);
    localStorage.setItem('selectedUser', JSON.stringify(user));
  }

  clearUserDetail() {
    this.selectedUser.set(null);
    localStorage.removeItem('selectedUser');
  }
}
