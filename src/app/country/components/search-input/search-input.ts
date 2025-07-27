import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styles: ``,
})
export class SearchInput {
  placeholder = input<string>('Buscar');
  search = output<string>();

  onSearchValue(value: string): void {
    this.search.emit(value);
  }
}
