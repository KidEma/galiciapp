import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFormResultComponent } from './consumer-form-result.component';

describe('ConsumerFormResultComponent', () => {
  let component: ConsumerFormResultComponent;
  let fixture: ComponentFixture<ConsumerFormResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerFormResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
