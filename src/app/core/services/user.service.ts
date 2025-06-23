import {Injectable, signal, computed} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = signal<any[]>([]);
  users = computed(() => this._users());
  private _loading = signal(false);
  loading = computed(() => this._loading());

  constructor(private http: HttpClient) {
  }

  getUsers(page: number, resultsPerPage: number) {
    this._loading.set(true);
    this.http.get<any>(`${environment.API_URL}/?page=${page}&results=${resultsPerPage}`)
      .subscribe({
        next: (next: any) => {
          this._users.set(next.results);
          this._loading.set(false);
        },
        error: () => {
          this._loading.set(false);
        }
      })
  }

  testInterceptor() {
    return this.http.get(`${environment.API_URL}/protected`).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log('Test error : ', error)
    });
  }
}
