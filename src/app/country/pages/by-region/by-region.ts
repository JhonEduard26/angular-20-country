import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

import { List } from '../../components/list/list';
import type { Region } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-by-region',
  imports: [List],
  templateUrl: './by-region.html',
  styles: ``,
})
export class ByRegion {
  private readonly countryService = inject(CountryService);
  protected region = signal<Region | null>(null);
  protected regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryResource = rxResource({
    params: () => ({
      region: this.region(),
    }),
    stream: ({ params }) => {
      if (!params.region) return of([]);

      return this.countryService.searchCountriesByRegion(params.region);
    },
  });
}
