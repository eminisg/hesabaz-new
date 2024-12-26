import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBillingComponent } from './single-billing.component';

describe('SingleBillingComponent', () => {
  let component: SingleBillingComponent;
  let fixture: ComponentFixture<SingleBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
