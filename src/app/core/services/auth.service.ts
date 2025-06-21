import {Injectable, signal} from '@angular/core';

const VALID_USERS = [
  {username: 'user123', password: 'Password1!'},
  {username: 'coder_gal', password: 'SecurePass2#'},
  {username: 'dev_master', password: 'MySecretPwd3$'},
  {username: 'test_account', password: 'WeakPassword4%'},
  {username: 'admin_user', password: 'AdminPass5^'}
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = signal(false);

  constructor() {
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        const found = VALID_USERS.find(u => u.username === username && u.password === password);
        this.loggedIn.set(!!found);
        resolve(!!found);
      }, 500);
    });
  }

  isLoggedIn() {
    return this.loggedIn.asReadonly();
  }

  logout() {
    this.loggedIn.set(false);
  }
}
