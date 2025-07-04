import { Injectable } from '@angular/core';
import { ApiEndPoint } from '../../enums/api-end-point';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Login } from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;
  constructor(private http: HttpClient,
    private router: Router,
  ) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Login {
    return this.currentUserSubject.value;
  }

  login(data: any) {
  
      return this.http.post<any>(environment.apiUrl + ApiEndPoint.login, data)
  
        .pipe(map((user: any) => {
          if (user.data) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            sessionStorage.setItem('loginRole', user.data.role);
            sessionStorage.setItem('user', user.data.role);
  
            this.currentUserSubject.next(user);
          } else {
            this.router.navigateByUrl('/login')
          }
          return user;
        }));
    }

  Register(data: any) {
    return this.http.post<any>(environment.apiUrl + ApiEndPoint.register, data)
      .pipe(map(user => {
        if (user.data) {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          sessionStorage.setItem('loginRole', user.data.role);
          sessionStorage.setItem('user', user.data.role);

          this.currentUserSubject.next(user);
        } else {

        }
        return user;
      }));
  }

  logout() {
    //  sessionStorage.clear();

    //   this.router.navigate(['/home-page'])
    //     .then(() => {      
    //       window.location.reload();
    //     });
  }

    otp(data: any) {
    return this.http.post<any>(environment.apiUrl + ApiEndPoint.emailOtp, data)
  }
  


}
