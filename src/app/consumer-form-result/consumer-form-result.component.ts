import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-consumer-form-result',
  templateUrl: './consumer-form-result.component.html',
  styleUrls: ['./consumer-form-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumerFormResultComponent implements OnInit {
  private probability: string;

  constructor(
    public dialogRef: MatDialogRef<string>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit() {
    console.log(this.data);
    let value = parseInt(this.data);
    value = (typeof value === "number" ? value : Math.random())
    value = Math.ceil(value);
    if (value <= 0) {
      this.probability = 'No está interesado en el producto'
    }
    else this.probability = `Consumirá el producto ${value} veces`;

  }

}
