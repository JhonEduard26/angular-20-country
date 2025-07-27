import { Component, signal } from '@angular/core';
import { List } from '../../components/list/list';

@Component({
  selector: 'app-by-region',
  imports: [List],
  templateUrl: './by-region.html',
  styles: ``,
})
export class ByRegion {
  countries = signal([]);
}
