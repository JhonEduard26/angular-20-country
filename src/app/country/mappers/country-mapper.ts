import type { Country } from '../interfaces/country-interface';
import type { RestCountry } from '../interfaces/rest-country-interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RestCountry): Country {
    const currencyKeys = Object.keys(restCountry.currencies);
    const currencyStr = currencyKeys
      .map((key) => {
        const currency = restCountry.currencies[key];
        return currency ? `${currency.name} (${key})` : key;
      })
      .join(', ');

    return {
      area: restCountry.area,
      capital: restCountry.capital.join(', '),
      currency: currencyStr,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      isoCode: restCountry.cca3,
      name: restCountry.translations['spa'].common ?? 'Sin nombre en español',
      population: restCountry.population,
    };
  }

  static mapRestCountriesToCountries(restCountries: RestCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
