import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PigReportComponent } from './view2/pig-report/pig-report.component';
import { CreatePigReportComponent } from './view2/create-pig-report/create-pig-report.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DelModalComponent } from './view2/pig-report/del-modal/del-modal.component';
import { EditModalComponent } from './view2/pig-report/edit-modal/edit-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [CreatePigReportComponent,PigReportComponent, DelModalComponent, EditModalComponent],
  imports: [
    CommonModule, MatFormFieldModule,MatTableModule, MatIconModule, MatDialogModule, MatFormFieldModule
  ],
  exports: [
    CreatePigReportComponent,PigReportComponent
  ]
}) 
export class Custom2Module { }
