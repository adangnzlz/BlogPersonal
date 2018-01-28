import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { AboutComponent } from 'app/pages/about/about.component';
import { LuckyComponent } from 'app/global-components/lucky/lucky.component';
import { HeaderComponent } from 'app/global-components/header/header.component';
import { HeaderAboutComponent } from 'app/pages/about/components/header-about/header-about.component';
import { FooterComponent } from 'app/global-components/footer/footer.component';
import { SectionComponent } from './pages/about/components/section/section.component';
import { CountryCardComponent } from './pages/about/components/country-card/country-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LuckyComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAboutComponent,
    SectionComponent,
    CountryCardComponent
  ],
  imports: [
    RouterModule.forRoot(routes), // configuración para el módulo raíz
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(), // Add Bootstrap module here.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
