import { Component } from '@angular/core';

@Component({
  selector: 'vehicles-mfe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  counter(i: number) {
    return new Array(i);
  }
}
