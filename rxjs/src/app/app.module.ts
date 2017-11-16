import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

/* Import Angular Material Modules */
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';


import {AppRoutingModule} from './router';
import { ObservableViewComponent } from './observable-view/observable-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
