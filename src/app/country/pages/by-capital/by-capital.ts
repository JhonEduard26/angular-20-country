import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';
import { CountryService } from '../../services/country-service';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInput, List],
  templateUrl: './by-capital.html',
  styles: ``,
})
export class ByCapital {
  private readonly countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    params: () => ({
      query: this.query(),
    }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      return this.countryService.searchByCapital(params.query);
    },
  });

  // countryResource = resource({
  //   params: () => ({
  //     query: this.query(),
  //   }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     );
  //   },
  // });

  // private isLoading = signal<boolean>(false);
  // protected hasError = signal<string | null>(null);
  // protected countries = signal<Country[]>([]);

  // onSearch(value: string) {
  //   if (this.isLoading()) return;
  //   this.isLoading.set(true);
  //   this.hasError.set(null);

  //   this.countryService.searchByCapital(value).subscribe({
  //     next: (data) => {
  //       this.isLoading.set(false);
  //       this.countries.set(data);
  //     },
  //     error: (error) => {
  //       this.isLoading.set(false);
  //       this.hasError.set(error);
  //       this.countries.set([]);
  //     },
  //   });
  // }
}
