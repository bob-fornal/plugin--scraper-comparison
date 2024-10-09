import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ScFunctionalityComponent } from './shared/sc-functionality/sc-functionality.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,

    ScFunctionalityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Scraper: Comparison';
}
