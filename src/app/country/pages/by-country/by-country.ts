import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';
import { CountryService } from '../../services/country-service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country',
  imports: [SearchInput, List],
  templateUrl: './by-country.html',
  styles: ``,
})
export class ByCountry {
  private readonly countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = resource({
    params: () => ({
      query: this.query(),
    }),
    loader: async ({ params }) => {
      if (!params.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCountry(params.query)
      );
    },
  });
}
