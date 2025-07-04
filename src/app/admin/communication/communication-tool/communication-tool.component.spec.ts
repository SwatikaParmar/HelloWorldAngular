import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationToolComponent } from './communication-tool.component';

describe('CommunicationToolComponent', () => {
  let component: CommunicationToolComponent;
  let fixture: ComponentFixture<CommunicationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunicationToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunicationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
