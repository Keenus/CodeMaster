import {Component} from '@angular/core';
import {ConfigService} from "../../services/config/config.service";
import {Offer, OfferService} from "../../services/offer/offer.service";
import {MatLabel} from "@angular/material/form-field";

export type AdditionalOption = {
  id: number,
  name: string,
  value: number
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatLabel
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent{

  additionalOptions: AdditionalOption[] = [
    {id: 1, name: 'Option 1', value: 10},
    {id: 2, name: 'Option 2', value: 15},
    {id: 3, name: 'Option 3', value: 20},
    {id: 4, name: 'Option 4', value: 25}
  ];

  constructor(
    public configService: ConfigService,
    public offerService: OfferService
  ) {}

}
