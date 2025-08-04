import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styles: ``,
})
export class NotFound {
  protected location = inject(Location);

  goBack() {
    this.location.back();
  }
}
