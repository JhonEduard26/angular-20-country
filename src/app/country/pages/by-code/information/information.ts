import { Component, input } from '@angular/core';
import { Country } from '../../../interfaces/country-interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './information.html',
  styles: ``,
})
export class Information {
  country = input.required<Country>();
}
