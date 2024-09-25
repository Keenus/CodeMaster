import {Injectable, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

export type LoginAction = 'forgotPassword' | 'login' | 'register' | 'logout';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  public authSignal = signal(false)

  constructor() { }

  makeAction(id: LoginAction) {
    let res = false;
    if(id === 'forgotPassword') {
      console.log('forgot password');
    }
    if(id === 'login') {
      console.log('login');
      res = true;
    }
    if(id === 'register') {
      console.log('register');
    }
    if(id === 'logout') {
      console.log('logout');
    }
      this.authSignal.set(res);
  }

}
