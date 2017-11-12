import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConsumerFormResultComponent } from '../consumer-form-result/consumer-form-result.component'
import { TransactionProbabilityForm } from '../transaction-probability-form'
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service'

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionFormComponent implements OnInit {


  private consultarFactibilidad: any;
  private form: TransactionProbabilityForm;

  constructor(public dialog: MatDialog, dataService: DataService) {
    this.consultarFactibilidad = (data) => {
      dataService.getLoanProbability(data)
        .subscribe(x => {
          this.form = {
            lat: null,
            lng: null,
            accounts: null,
            amount: null,
            rewards: null,
            transactions: null,
            transactionTotalAmounts: null
          };
          dialog.open(ConsumerFormResultComponent, {
            data: x,
          });


        });
    }



  }

  ngOnInit() {

  }
}
