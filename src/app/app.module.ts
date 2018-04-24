import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatSidenavModule,
  MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

const MaterialImports: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ].concat(MaterialImports),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
