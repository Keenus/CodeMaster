import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

    constructor(
      public loginService: LoginService
    ) {}
}
