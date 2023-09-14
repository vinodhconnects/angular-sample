import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent //component,directives and pipes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule //inlude third party modules or any user defined module
  ],
  providers: [],//services
  bootstrap: [AppComponent]//components that can be called in index.html
})
export class AppModule { }
