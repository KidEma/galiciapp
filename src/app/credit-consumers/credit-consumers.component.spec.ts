import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditConsumersComponent } from './credit-consumers.component';

describe('CreditConsumersComponent', () => {
  let component: CreditConsumersComponent;
  let fixture: ComponentFixture<CreditConsumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditConsumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
