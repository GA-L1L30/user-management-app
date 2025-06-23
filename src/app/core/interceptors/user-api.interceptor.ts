import {inject} from '@angular/core';
import {HttpEvent, HttpHandlerFn, HttpRequest, HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

export const userApiInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const snackBar = inject(MatSnackBar);

  if (req.url.startsWith(environment.API_URL)) {
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          snackBar.open(error.message, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
        return throwError(() => error);
      })
    );
  }
  return next(req);
};
