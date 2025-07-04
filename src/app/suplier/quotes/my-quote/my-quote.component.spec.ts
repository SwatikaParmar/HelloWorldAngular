import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuoteComponent } from './my-quote.component';

describe('MyQuoteComponent', () => {
  let component: MyQuoteComponent;
  let fixture: ComponentFixture<MyQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyQuoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
