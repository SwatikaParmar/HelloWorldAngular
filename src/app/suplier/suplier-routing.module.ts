import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { SuplierComponent } from './suplier.component';
import { SupplierLayoutComponent } from '../../layouts/layout/supplier-layout/supplier-layout.component';

const routes: Routes = [
     {
        path: '',
        redirectTo: 'supplier',
        pathMatch: 'full'
    },
  {
    path: '',
    component: SupplierLayoutComponent,
    canActivate: [AuthGuard],
    children: [
       { path: '', component: SuplierComponent },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplierRoutingModule { }
