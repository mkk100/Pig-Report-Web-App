import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PigReportComponent } from './view2/pig-report/pig-report.component';
import { CreatePigReportComponent } from './view2/create-pig-report/create-pig-report.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreatePigReportComponent,PigReportComponent],
  imports: [
    CommonModule, MatFormFieldModule,MatTableModule, MatIconModule
  ],
  exports: [
    CreatePigReportComponent,PigReportComponent
  ]
}) 
export class Custom2Module { }
