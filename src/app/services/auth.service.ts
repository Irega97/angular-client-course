import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signIn(userData: User) {
    return this.http.post(environment.apiURL + '/signin', userData);
    //localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn(){
    //true si esta, false si no
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logOut(){
    localStorage.removeItem('ACCESS_TOKEN')
  }

  public getToken(){
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
