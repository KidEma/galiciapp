import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditConsumerListComponent } from './credit-consumer-list.component';

describe('CreditConsumerListComponent', () => {
  let component: CreditConsumerListComponent;
  let fixture: ComponentFixture<CreditConsumerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditConsumerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditConsumerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
