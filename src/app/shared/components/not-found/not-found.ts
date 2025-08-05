import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styles: ``,
})
export class NotFound {
  protected location = inject(Location);

  goBack() {
    this.location.back();
  }
}
