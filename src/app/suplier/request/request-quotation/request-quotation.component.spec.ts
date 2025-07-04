import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQuotationComponent } from './request-quotation.component';

describe('RequestQuotationComponent', () => {
  let component: RequestQuotationComponent;
  let fixture: ComponentFixture<RequestQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestQuotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
