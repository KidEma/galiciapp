import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TransaccionRiesgosa } from '../transacciones-lista/transacciones-lista.component'

@Component({
  selector: 'app-transacciones-de-riesgo',
  templateUrl: './transacciones-de-riesgo.component.html',
  styleUrls: ['./transacciones-de-riesgo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransaccionesDeRiesgoComponent implements OnInit {
  private listaDeTransacciones: TransaccionRiesgosa[];
  constructor() { }

  ngOnInit() {
    this.listaDeTransacciones = [
      {
        titulo: "Transacción de riesgo 1",
        fecha: new Date()
      }
    ];
  }

}
