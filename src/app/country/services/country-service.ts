import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

import { CountryMapper } from '../mappers/country-mapper';
import type { RestCountry } from '../interfaces/rest-country-interface';
import type { Country } from '../interfaces/country-interface';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();
    return this.http.get<RestCountry[]>(`${BASE_URL}/capital/${query}`).pipe(
      map((items) => CountryMapper.mapRestCountriesToCountries(items)),
      catchError((error) => {
        console.error('Error fetching countries by capital:');
        return throwError(
          () => new Error('No se pudo encontrar la capital: ' + query)
        );
      })
    );
  }

  searchByCountry(query: string) {
    query = query.toLowerCase().trim();
    return this.http.get<RestCountry[]>(`${BASE_URL}/name/${query}`).pipe(
      map((items) => CountryMapper.mapRestCountriesToCountries(items)),
      catchError((error) => {
        console.error('Error fetching countries by name:');
        return throwError(
          () => new Error('No se pudo encontrar el país: ' + query)
        );
      })
    );
  }
}
