import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqBuyerComponent } from './rfq-buyer.component';

describe('RfqBuyerComponent', () => {
  let component: RfqBuyerComponent;
  let fixture: ComponentFixture<RfqBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfqBuyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RfqBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
