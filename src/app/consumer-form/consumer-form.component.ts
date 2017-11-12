import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConsumerFormResultComponent} from '../consumer-form-result/consumer-form-result.component'

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumerFormComponent implements OnInit {

  private consultarFactibilidad : any;
  constructor(public dialog: MatDialog) { 
    this.consultarFactibilidad = (data) => {
      dialog.open(ConsumerFormResultComponent, {
        data: data,
      });
    }
  }

  ngOnInit() {

  }

}
