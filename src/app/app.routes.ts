
import { Routes } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutComponent } from 'app/pages/about/about.component';
export const routes: Routes = [
  { 'path': '', component: HomeComponent },
  { 'path': 'inicio', component: HomeComponent },
  { 'path': 'about', component: AboutComponent },
  { 'path': '**', redirectTo: '' }
];
