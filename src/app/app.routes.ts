import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
