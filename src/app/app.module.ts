import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PersonService } from './Services/PersonService';
import { PersonComponent } from './Component/PersonComponent';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,PersonComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [PersonComponent]
})
export class AppModule { }
