import {Component} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginAction, LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    public loginService: LoginService
  ) {}

  runAction(id: LoginAction) {
    this.loginService.makeAction(id)
  }

}
