import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sc-home',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sc-home.component.html',
  styleUrl: './sc-home.component.scss'
})
export class ScHomeComponent {

  public getSearchList(): Array<any> {
    const item = localStorage.getItem('scraper-list');
    const list = item === null ? [] : JSON.parse(item);
    return list;
  }

  public getItemUrl(url: string): string {
    return `/item/${url}`;
  };
}
