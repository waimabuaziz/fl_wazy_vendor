import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILoginResponse } from '../interfaces/ILoginResponse';

import { keysToCamel } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  lsTokenKey: string = 'fl_wazy_vendor_access_token';

  constructor(private http: HttpClient, private router: Router) {}

  login(data: {email:string, password: string}) {
    const options = { headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }};

    return this.http.post<ILoginResponse>(`${environment.apiUrl}/login`, JSON.stringify(data), options).pipe(
      map(data => {
        
        const formattedData =  keysToCamel(data);

        this.token = formattedData.accessToken;

        return formattedData;
      })
    );
  }

  logout() {
    let removeToken = localStorage.removeItem(this.lsTokenKey);
    
    if(removeToken === null || removeToken === undefined) {
      this.router.navigateByUrl('/auth/login');
    }
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem(this.lsTokenKey);

    if(authToken !== null) {
      // check expiry
      const jwtPayload = JSON.parse(window.atob(authToken.split('.')[1]));
      
      // If expired
      if(Date.now() >= jwtPayload.exp * 1000) {
        return false;
      }

      return true;
    }

    return false;
  }

  get token() {
    const token = localStorage.getItem(this.lsTokenKey);
    
    return token !== null ? token : '';
  }

  set token(accessToken: string) {
    localStorage.setItem(this.lsTokenKey, accessToken);
  }
}
