import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  { 'path': '', component: HomeComponent },
  { 'path': 'inicio', component: HomeComponent },
  { 'path': 'about', component: HomeComponent },
];
