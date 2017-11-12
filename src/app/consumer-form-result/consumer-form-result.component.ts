import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-consumer-form-result',
  templateUrl: './consumer-form-result.component.html',
  styleUrls: ['./consumer-form-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumerFormResultComponent implements OnInit {
private probability: number;

  constructor() { }

  ngOnInit() {
    this.probability = Math.random();  
  }

}
