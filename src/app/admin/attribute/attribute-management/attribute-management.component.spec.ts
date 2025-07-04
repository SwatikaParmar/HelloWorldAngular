import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeManagementComponent } from './attribute-management.component';

describe('AttributeManagementComponent', () => {
  let component: AttributeManagementComponent;
  let fixture: ComponentFixture<AttributeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
