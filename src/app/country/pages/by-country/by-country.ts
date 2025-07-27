import { Component, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';

@Component({
  selector: 'app-by-country',
  imports: [SearchInput, List],
  templateUrl: './by-country.html',
  styles: ``,
})
export class ByCountry {
  countries = signal([]);

  onSearch(value: string) {
    console.log('Event emitted with value:', value);
    // Implement the search logic here
  }
}
