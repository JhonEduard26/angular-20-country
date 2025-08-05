import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';

import { CountryMapper } from '../mappers/country-mapper';
import type { RestCountry } from '../interfaces/rest-country-interface';
import type { Country, Region } from '../interfaces/country-interface';

const BASE_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.http.get<RestCountry[]>(`${BASE_URL}/capital/${query}`).pipe(
      map((items) => CountryMapper.mapRestCountriesToCountries(items)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError((error) => {
        console.error('Error fetching countries by capital:');
        return throwError(
          () => new Error('No se pudo encontrar la capital: ' + query)
        );
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase().trim();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    console.log('Llegando al servidor', query);

    return this.http.get<RestCountry[]>(`${BASE_URL}/name/${query}`).pipe(
      map((items) => CountryMapper.mapRestCountriesToCountries(items)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(1000),
      catchError((error) => {
        console.error('Error fetching countries by name:');
        return throwError(
          () => new Error('No se pudo encontrar el país: ' + query)
        );
      })
    );
  }

  searchCountryByIsoCode(code: string) {
    return this.http.get<RestCountry[]>(`${BASE_URL}/alpha/${code}`).pipe(
      map((items) => CountryMapper.mapRestCountriesToCountries(items)),
      delay(1000),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.error('Error fetching countries by name:');
        return throwError(
          () => new Error('No se pudo encontrar el país con el código: ' + code)
        );
      })
    );
  }

  searchCountriesByRegion(region: Region): Observable<Country[]> {
    if (this.queryCacheRegion.has(region)) {
      return of(this.queryCacheRegion.get(region) ?? []);
    }

    return this.http.get<RestCountry[]>(`${BASE_URL}/region/${region}`).pipe(
      map((items) => CountryMapper.mapRestCountriesToCountries(items)),
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      delay(1000),
      catchError((error) => {
        console.error('Error fetching countries by region:', error);
        return throwError(
          () => new Error('No se pudo encontrar la región: ' + region)
        );
      })
    );
  }
}
