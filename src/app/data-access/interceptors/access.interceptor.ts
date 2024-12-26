import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {

  constructor(private rest: AppService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        if ([400, 401, 403].includes(error.status)) {
          // Удаление токена и редирект
          localStorage.removeItem('unregAccessToken');
          this.router.navigate(['/']).then(() => {
            // Запрос нового токена
            this.rest.getAccessToken().pipe(
              catchError(() => {
                console.error('Failed to refresh access token.');
                return of(null); // Возвращаем безопасное значение
              })
            ).subscribe(result => {
              if (result) {
                const data: any = result;
                localStorage.setItem('unregAccessToken', data.accessToken);
                setTimeout(() => location.reload(), 300);
              }
            });
          });
        }
        return throwError(error);
      })
    );
  }
}
