// login.component.ts
import {Component, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatError} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatButton,
    MatSlideToggle,
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = signal(false);
  error = signal('');
  showPassword = signal(false);

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  async login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.error.set('');
    this.loading.set(true);

    const {username, password} = this.loginForm.value;
    const successLogin = await this.authService.login(username, password);

    this.loading.set(false);

    successLogin ? this.router.navigate(['/home']) : this.error.set('Invalid username or password')
  }

  hasError(controlName: string, errorType: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control?.hasError(errorType) && (control?.dirty || control?.touched));
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);

    if (control?.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
    }

    return '';
  }
}
