import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {Router, RouterModule} from '@angular/router';
import {MatBadge} from '@angular/material/badge';
import {AuthService} from '../../../core/services/auth.service';
import {UserService} from '../../../core/services/user.service';
import {BackgroundCardComponent} from '../background-card/background-card.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    RouterModule,
    MatBadge,
    BackgroundCardComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent implements OnInit {
  private readonly resultsPerPage = 10;
  users: any;

  constructor(private readonly router: Router, public readonly authService: AuthService, public readonly userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }
  
  getUsers() {
    this.users = this.userService.users;
  }


}
