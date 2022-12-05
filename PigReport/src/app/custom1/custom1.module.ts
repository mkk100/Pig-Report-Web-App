import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationComponent } from './view1/add-location/add-location.component';


@NgModule({
  declarations: [AddLocationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddLocationComponent
  ]
})
export class Custom1Module { }
