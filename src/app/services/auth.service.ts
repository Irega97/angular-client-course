import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signIn(userData: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn(){
    //true si esta, false si no
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logOut(){
    localStorage.removeItem('ACCESS_TOKEN')
  }
}
