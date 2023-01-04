import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePigReportComponent } from './custom2/view2/create-pig-report/create-pig-report.component';
import { PigReportComponent } from './custom2/view2/pig-report/pig-report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './custom1/view1/view1.component';
import { Custom1Module } from './custom1/custom1.module';
import { View2Component } from './custom2/view2/view2.component';
import { Custom2Module } from './custom2/custom2.module';
import { EditModalComponent } from './custom2/view2/pig-report/edit-modal/edit-modal.component';

const appRoute: Routes = [
  { path: '', component: View1Component },
  { path: 'PigReport', component: View2Component },
  {path: 'edit/:pigID', component: EditModalComponent}
] 
@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    Custom1Module,
    Custom2Module,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent,View1Component,View2Component]
})
export class AppModule { }
