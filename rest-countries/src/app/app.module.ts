import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CountryFormComponent } from './components/country/country-form/country-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
