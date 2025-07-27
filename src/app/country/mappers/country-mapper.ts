import type { Country } from '../interfaces/country-interface';
import type { RestCountry } from '../interfaces/rest-country-interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RestCountry): Country {
    return {
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.name.common,
      capital: restCountry.capital.join(', '),
      population: restCountry.population,
    };
  }

  static mapRestCountriesToCountries(restCountries: RestCountry[]): Country[] {
    return restCountries.map(this.mapRestCountryToCountry);
  }
}
