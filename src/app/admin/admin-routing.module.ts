import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { AdminComponent } from '../../app/admin/admin.component';
import { ProductManagementComponent } from '../../app/admin/product/product-management/product-management.component';
import { CategoryManagementComponent } from '../../app/admin/category/category-management/category-management.component';
import { AttributeManagementComponent } from '../../app/admin/attribute/attribute-management/attribute-management.component';
import { RfqBuyerComponent } from '../../app/admin/rfq/rfq-buyer/rfq-buyer.component';
import { OrderEscrowComponent } from '../../app/admin/order/order-escrow/order-escrow.component';
import { LogisticsShippingComponent } from '../../app/admin/logistics/logistics-shipping/logistics-shipping.component';
import { DisputeResolutionComponent } from '../../app/admin/dispute/dispute-resolution/dispute-resolution.component';
import { CommunicationToolComponent } from '../../app/admin/communication/communication-tool/communication-tool.component';
import { AnalyticsReportComponent } from '../../app/admin/analytics/analytics-report/analytics-report.component';
import { CmsContentComponent } from '../../app/admin/cms/cms-content/cms-content.component';
import { SecurityComplianceComponent } from '../../app/admin/security/security-compliance/security-compliance.component';
import { AdminLayoutComponent } from '../../layouts/layout/admin-layout/admin-layout.component';
import { AttributeMappingComponent } from './mapping/attribute-mapping/attribute-mapping.component';
import { SupplierManagementComponent } from './supplier/supplier-management/supplier-management.component';
import { VendorManagementComponent } from './vendor/vendor-management/vendor-management.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: AdminComponent },
            { path: 'product-management', component: ProductManagementComponent },
            { path: 'category-management', component: CategoryManagementComponent },
            { path: 'attribute-management', component: AttributeManagementComponent },
            { path: 'rfq-buyer', component: RfqBuyerComponent },
            { path: 'orders-escrow', component: OrderEscrowComponent },
            { path: 'logistics-shipping', component: LogisticsShippingComponent },
            { path: 'dispute-resolution', component: DisputeResolutionComponent },
            { path: 'communication-tool', component: CommunicationToolComponent },
            { path: 'analytics-reports', component: AnalyticsReportComponent },
            { path: 'cms-content', component: CmsContentComponent },
            { path: 'security-compliance', component: SecurityComplianceComponent },
            { path: 'attribute-mapping', component: AttributeMappingComponent },
            { path: 'supplier-management', component: SupplierManagementComponent },
            { path: 'vendor-management', component: VendorManagementComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }