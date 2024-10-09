import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sc-add-search',
  standalone: true,
  imports: [
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './sc-add-search.component.html',
  styleUrl: './sc-add-search.component.scss'
})
export class ScAddSearchComponent {
  public name: string = '';

  public saveSearch() {
    const saveName: string = this.name
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/[\s]/g, '-')
      .toLowerCase();
    this.updateSearchList(this.name, saveName);
  }

  private updateSearchList(name: string, saveName: string) {
    const item = localStorage.getItem('scraper-list');
    const list = item === null ? [] : JSON.parse(item);
    list.push({ name, saveName });
    localStorage.setItem('scraper-list', JSON.stringify(list));
    return list;
  }
}
