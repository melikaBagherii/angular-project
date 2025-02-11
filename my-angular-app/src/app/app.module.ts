import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArcaptchaAngularModule } from 'arcaptcha-angular';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArcaptchaAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
