import {Injectable, signal, WritableSignal} from '@angular/core';

export type Currency = {
  name: string,
  value: number
  short: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  currencyOptions: Currency[] = [
    {name: 'ZŁ', value: 4, short: 'zł'},
    {name: 'USD', value: 1, short: '$'},
    {name: 'EUR', value: 0.85, short: '€'},
    {name: 'GBP', value: 0.75, short: '£'}
  ];

  public selectedCurrency: WritableSignal<Currency> = signal(this.currencyOptions[0]);

  constructor() {
    this.selectedCurrency.set(this.currencyOptions[1]);
  }
}
