import { Component } from '@angular/core';
import {Offer, OfferService} from "../../services/offer/offer.service";

@Component({
  selector: 'app-offer-list',
  standalone: true,
  imports: [],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent {

  constructor(
    public offerService: OfferService
  ) {
  }

  offers: Offer[] = [
    {name: 'Offer 1', img: 'https://via.placeholder.com/150', value: 37, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.'},
    {name: 'Offer 2', img: 'https://via.placeholder.com/150', value: 50, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.'},
    {name: 'Offer 3', img: 'https://via.placeholder.com/150', value: 71, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.'},
    {name: 'Offer 4', img: 'https://via.placeholder.com/150', value: 120, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.'},
  ];

  chooseOffer(offer: Offer) {
    this.offerService.updateFinalValue(offer);
  }
}
