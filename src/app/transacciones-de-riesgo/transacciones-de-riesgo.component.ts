import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service'
import { RiskyTransaction } from '../risky-transaction'
import { Router } from "@angular/router";
@Component({
  selector: 'app-transacciones-de-riesgo',
  templateUrl: './transacciones-de-riesgo.component.html',
  styleUrls: ['./transacciones-de-riesgo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransaccionesDeRiesgoComponent implements OnInit {
  private listaDeTransacciones: RiskyTransaction[];
  private showProgressBar = false;
  constructor(private router: Router, private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getTranfers()
    .subscribe(data => { this.listaDeTransacciones = data })
  }

  public goToCreditconsumerForm = () => {
    this.showProgressBar = true;
    setTimeout(() => {
      this.router.navigate(['transactionform']);
    },
      5000);
  }

}
