import type { Country } from '../interfaces/country-interface';
import type { RestCountry } from '../interfaces/rest-country-interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RestCountry): Country {
    return {
      isoCode: restCountry.cca3,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'Sin nombre en español',
      capital: restCountry.capital.join(', '),
      population: restCountry.population,
    };
  }

  static mapRestCountriesToCountries(restCountries: RestCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
