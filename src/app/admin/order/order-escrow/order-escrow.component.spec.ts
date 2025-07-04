import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEscrowComponent } from './order-escrow.component';

describe('OrderEscrowComponent', () => {
  let component: OrderEscrowComponent;
  let fixture: ComponentFixture<OrderEscrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderEscrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderEscrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
