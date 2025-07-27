import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { CountryResponse } from '../interfaces/country-interface';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class Country {
  private readonly http = inject(HttpClient);

  searchByCapital(query: string) {
    query = query.toLowerCase().trim();
    return this.http.get<CountryResponse[]>(`${BASE_URL}/capital/${query}`);
  }
}
