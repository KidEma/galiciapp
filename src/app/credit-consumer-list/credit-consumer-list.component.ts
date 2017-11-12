import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Customer } from '../customer'
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-credit-consumer-list',
  templateUrl: './credit-consumer-list.component.html',
  styleUrls: ['./credit-consumer-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreditConsumerListComponent implements OnInit {
  @Input() data: Customer[]
private displayedColumns: any;
private dataSource: any;
  constructor() {
   }

  ngOnInit() {

  }

}
