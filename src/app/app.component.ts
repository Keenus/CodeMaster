import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginService} from "../assets/services/login/login.service";
import {LoginComponent} from "../assets/components/main/login/login.component";
import {MatIcon} from "@angular/material/icon";
import {TopBarComponent} from "../assets/components/main/top-bar/top-bar.component";
import {OfferListComponent} from "../assets/components/offer-list/offer-list.component";
import {CartComponent} from "../assets/components/cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, MatIcon, TopBarComponent, OfferListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-page';

  constructor(
    public loginService: LoginService
  ) {}

}
