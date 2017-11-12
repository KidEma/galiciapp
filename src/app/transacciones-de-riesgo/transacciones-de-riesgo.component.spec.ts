import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesDeRiesgoComponent } from './transacciones-de-riesgo.component';

describe('TransaccionesDeRiesgoComponent', () => {
  let component: TransaccionesDeRiesgoComponent;
  let fixture: ComponentFixture<TransaccionesDeRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaccionesDeRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionesDeRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
