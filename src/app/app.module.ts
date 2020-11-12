import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { LeadsComponent } from './leads/leads.component';

const appRoutes: Routes = [
  { path: '', component: LeadsComponent }
  
 
];


@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
