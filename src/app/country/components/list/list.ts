import { Component, input } from '@angular/core';
import type { CountryResponse } from '../../interfaces/country-interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './list.html',
  styles: ``,
})
export class List {
  countries = input.required<CountryResponse[]>();
}
