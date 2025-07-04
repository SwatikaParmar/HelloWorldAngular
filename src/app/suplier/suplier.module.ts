import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SupplierLayoutComponent } from '../../layouts/layout/supplier-layout/supplier-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { SuplierRoutingModule } from './suplier-routing.module';
import { SuplierComponent } from './suplier.component';




@NgModule({
  declarations: [
    SupplierLayoutComponent,
    SuplierComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuplierRoutingModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    AngularEditorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class SuplierModule { }
