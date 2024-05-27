import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplifyTicketManagementComponent } from './amplify-ticket-management.component';

describe('AmplifyTicketManagementComponent', () => {
  let component: AmplifyTicketManagementComponent;
  let fixture: ComponentFixture<AmplifyTicketManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmplifyTicketManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmplifyTicketManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
