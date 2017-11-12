import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TransaccionRiesgosa} from '../transacciones-lista/transacciones-lista.component'
@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionDetailComponent implements OnInit {
//  private data: TransaccionRiesgosa;
  

  ngOnInit() {
    console.log(this.data);
  }


  constructor(
    public dialogRef: MatDialogRef<TransaccionRiesgosa>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
