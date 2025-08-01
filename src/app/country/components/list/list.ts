import { Component, input } from '@angular/core';
import type { Country } from '../../interfaces/country-interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './list.html',
  styles: ``,
})
export class List {
  countries = input.required<Country[]>();
}
