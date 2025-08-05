import { Component, effect, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styles: ``,
})
export class SearchInput {
  placeholder = input<string>('Buscar');
  debounceTime = input<number>(400);
  initialValue = input<string>('');
  search = output<string>();

  inputValue = linkedSignal(() => this.initialValue());

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.search.emit(value);
    }, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    });
  });
}
