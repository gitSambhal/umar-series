import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HindiComponent } from './hindi/hindi.component';

let routes: Routes = [
  { path : '', component: HindiComponent }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, HindiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
