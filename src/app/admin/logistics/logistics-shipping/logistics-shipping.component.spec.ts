import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsShippingComponent } from './logistics-shipping.component';

describe('LogisticsShippingComponent', () => {
  let component: LogisticsShippingComponent;
  let fixture: ComponentFixture<LogisticsShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticsShippingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticsShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
