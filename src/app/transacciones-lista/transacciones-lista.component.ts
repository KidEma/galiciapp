import { Component, OnInit, ViewEncapsulation, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TransactionDetailComponent } from '../transaction-detail/transaction-detail.component'
import { RiskyTransaction } from '../risky-transaction'

@Component({
  selector: 'app-transacciones-lista',
  templateUrl: './transacciones-lista.component.html',
  styleUrls: ['./transacciones-lista.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransaccionesListaComponent implements OnInit {
  @Input() data: RiskyTransaction
  private showInfo: any;

  constructor(public dialog: MatDialog) { 
    this.showInfo = (data) => {
      dialog.open(TransactionDetailComponent, {
        data: data,
      });
    }
  }
  ngOnInit() {

  }
}

