import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { VendorLayoutComponent } from '../../layouts/layout/vendor-layout/vendor-layout.component';



@NgModule({
  declarations: [
     VendorLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
   ReactiveFormsModule,
   NgxSpinnerModule
  ]
})
export class VendorModule { }
