import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Routes } from '@angular/router';
import { LuckyComponent } from './components/lucky/lucky.component';
export const routes: Routes = [
  { 'path': '', component: HomeComponent },
  { 'path': 'inicio', component: HomeComponent },
  { 'path': 'about', component: AboutComponent }
  // { 'path': 'lucky', component: LuckyComponent }
];
