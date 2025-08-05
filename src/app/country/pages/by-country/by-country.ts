import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';
import { CountryService } from '../../services/country-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country',
  imports: [SearchInput, List],
  templateUrl: './by-country.html',
  styles: ``,
})
export class ByCountry {
  private readonly countryService = inject(CountryService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    params: () => ({
      query: this.query(),
    }),
    stream: ({ params }) => {
      if (!params.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query,
        },
      });

      return this.countryService.searchByCountry(params.query);
    },
  });

  // countryResource = resource({
  //   params: () => ({
  //     query: this.query(),
  //   }),
  //   loader: async ({ params }) => {
  //     if (!params.query) return [];

  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(params.query)
  //     );
  //   },
  // });
}
