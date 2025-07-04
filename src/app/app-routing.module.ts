import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { environment } from '../environments/environment';
const AuthModule = () => import('../auth/auth.module').then(m => m.AuthModule);
const HomeModule = () => import('../features/home/home.module').then(m => m.HomeModule);
const AdminModule = () => import('./admin/admin.module').then(m => m.AdminModule);
const SuplierModule = () => import('./suplier/suplier.module').then(m => m.SuplierModule);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: HomeModule,
  },
  {
    path: 'auth',
    loadChildren: AuthModule,
  },
  {
    path: 'admin',
    loadChildren: AdminModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'supplier',
    loadChildren: SuplierModule,
    

  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    !environment.production
      ? { enableTracing: false, useHash: false, scrollPositionRestoration: 'enabled' }
      : { scrollPositionRestoration: 'enabled', useHash: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
