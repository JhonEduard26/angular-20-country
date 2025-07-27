import { Component, inject, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';
import { Country } from '../../services/country';
import type { CountryResponse } from '../../interfaces/country-interface';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInput, List],
  templateUrl: './by-capital.html',
  styles: ``,
})
export class ByCapital {
  private readonly countryService = inject(Country);
  private isLoading = signal<boolean>(false);
  private hasError = signal<string | null>(null);
  protected countries = signal<CountryResponse[]>([]);

  onSearch(value: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.hasError.set(null);

    this.countryService.searchByCapital(value).subscribe({
      next: (data) => {
        this.countries.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        this.hasError.set('No se pudo encontrar la capital');
        this.countries.set([]);
        this.isLoading.set(false);
      },
    });
  }
}
