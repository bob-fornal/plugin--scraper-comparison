import { Routes } from '@angular/router';
import { ScAddSearchComponent } from './pages/sc-add-search/sc-add-search.component';
import { ScHomeComponent } from './pages/sc-home/sc-home.component';
import { ScItemComponent } from './pages/sc-item/sc-item.component';

export const routes: Routes = [
  { path: 'add-search', component: ScAddSearchComponent },

  { path: 'item/:saveName', component: ScItemComponent },
  
  { path: 'home', component: ScHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
