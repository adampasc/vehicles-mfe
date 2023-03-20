import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomeModule } from '@vehicles-mfe/home';

@Component({
  standalone: true,
  imports: [HomeModule, RouterModule],
  selector: 'vehicles-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
