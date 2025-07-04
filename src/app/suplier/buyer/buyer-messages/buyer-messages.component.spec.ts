import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerMessagesComponent } from './buyer-messages.component';

describe('BuyerMessagesComponent', () => {
  let component: BuyerMessagesComponent;
  let fixture: ComponentFixture<BuyerMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
