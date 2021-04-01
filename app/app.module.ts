import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { AppComponent } from './app.component';
import { CategoriesService } from './northwind.service';
import { LookupModule } from './lookup/lookup.module';


@NgModule({
  imports: [ 
    HttpClientModule, 
    FormsModule, 
    BrowserModule, 
    BrowserAnimationsModule, 
    LookupModule
  ],
  declarations: [ AppComponent ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
