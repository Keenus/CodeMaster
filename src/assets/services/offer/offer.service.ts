import {Injectable, signal, WritableSignal} from '@angular/core';
import {AdditionalOption} from "../../components/cart/cart.component";

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

  toggleOption(option: AdditionalOption, event: Event) {
    let isChecked = (event.target as HTMLInputElement).checked;
    let currentValue = this.finalValue();
    isChecked ? this.finalValue.set(currentValue + option.value) : this.finalValue.set(currentValue - option.value);
  }
}
