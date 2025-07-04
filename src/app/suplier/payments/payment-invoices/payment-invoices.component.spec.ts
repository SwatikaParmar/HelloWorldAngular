import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInvoicesComponent } from './payment-invoices.component';

describe('PaymentInvoicesComponent', () => {
  let component: PaymentInvoicesComponent;
  let fixture: ComponentFixture<PaymentInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentInvoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
