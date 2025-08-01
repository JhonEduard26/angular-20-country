import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'country-by-code',
  imports: [],
  templateUrl: './by-code.html',
  styles: ``,
})
export class ByCode {
  private readonly countryService = inject(CountryService);
  protected isoCode = inject(ActivatedRoute).snapshot.params['isocode'];

  countryResource = rxResource({
    params: () => ({
      code: this.isoCode,
    }),
    stream: ({ params }) => {
      return this.countryService.searchCountryByIsoCode(params.code);
    },
  });
}
