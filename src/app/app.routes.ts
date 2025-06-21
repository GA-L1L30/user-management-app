import {Routes} from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {UserDetailComponent} from './features/user-detail/user-detail.component';
import {SupportComponent} from './features/support/support.component';
import {authGuard} from './shared/guards/auth.guard';
import {HomePageComponent} from './features/home-page/home-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent, canActivate: [authGuard]},
  {path: 'users/:id', component: UserDetailComponent, canActivate: [authGuard]},
  {path: 'support', component: SupportComponent},
  {path: '**', redirectTo: 'login'},
];
