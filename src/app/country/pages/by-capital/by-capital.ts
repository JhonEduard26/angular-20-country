import { Component } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInput, List],
  templateUrl: './by-capital.html',
  styles: ``,
})
export class ByCapital {
  onSearch(value: string) {
    console.log('Event emitted with value:', value);
    // Implement the search logic here
  }
}
