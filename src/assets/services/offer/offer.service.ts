import {Injectable, signal, WritableSignal} from '@angular/core';

export type Offer = { name: string, img: string, value: number, desc: string } | null;

@Injectable({
  providedIn: 'root'
})
export class OfferService{

  selectedOfferSubject: WritableSignal<Offer> = signal(null);

  finalValue: WritableSignal<number> = signal(0);

  constructor() { }

  updateFinalValue(selectedOffer: Offer) {
    this.selectedOfferSubject() === selectedOffer ? this.selectedOfferSubject.set(null) : this.selectedOfferSubject.set(selectedOffer);
    let selectedOfferValue  = this.selectedOfferSubject()?.value;
    selectedOfferValue ? this.finalValue.set(selectedOfferValue) : this.finalValue.set(0);
  }

}
