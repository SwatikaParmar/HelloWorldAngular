import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminComponent } from '../../app/admin/admin.component';
import { ProductManagementComponent } from '../../app/admin/product/product-management/product-management.component';
import { AttributeManagementComponent } from '../../app/admin/attribute/attribute-management/attribute-management.component';
import { RfqBuyerComponent } from '../../app/admin/rfq/rfq-buyer/rfq-buyer.component';
import { OrderEscrowComponent } from '../../app/admin/order/order-escrow/order-escrow.component';
import { LogisticsShippingComponent } from '../../app/admin/logistics/logistics-shipping/logistics-shipping.component';
import { DisputeResolutionComponent } from '../../app/admin/dispute/dispute-resolution/dispute-resolution.component';
import { CommunicationToolComponent } from '../../app/admin/communication/communication-tool/communication-tool.component';
import { AnalyticsReportComponent } from '../../app/admin/analytics/analytics-report/analytics-report.component';
import { CmsContentComponent } from '../../app/admin/cms/cms-content/cms-content.component';
import { SecurityComplianceComponent } from '../../app/admin/security/security-compliance/security-compliance.component';
import { CategoryManagementComponent } from './category/category-management/category-management.component';
import { HomeRoutingModule } from '../../features/home/home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { AttributeMappingComponent } from './mapping/attribute-mapping/attribute-mapping.component';
import { SupplierManagementComponent } from './supplier/supplier-management/supplier-management.component';
import { VendorManagementComponent } from './vendor/vendor-management/vendor-management.component';
import { AdminLayoutComponent } from '../../layouts/layout/admin-layout/admin-layout.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    AttributeManagementComponent,
    RfqBuyerComponent,
    OrderEscrowComponent,
    LogisticsShippingComponent,
    DisputeResolutionComponent,
    CommunicationToolComponent,
    AnalyticsReportComponent,
    CmsContentComponent,
    SecurityComplianceComponent,
    AttributeMappingComponent,
    SupplierManagementComponent,
    VendorManagementComponent
  ],
  imports: [
    CommonModule,
       ReactiveFormsModule,
       AdminRoutingModule,
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
export class AdminModule { }
