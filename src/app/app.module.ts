import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Sect1Component } from './sect1/sect1.component';
import { Sect2Component } from './sect2/sect2.component';
import { Sect3Component } from './sect3/sect3.component';
import { Sect4Component } from './sect4/sect4.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    Sect1Component,
    Sect2Component,
    Sect3Component,
    Sect4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
