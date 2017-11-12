import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Customer } from '../customer'
import { Router } from "@angular/router";
import { DataService } from '../data.service'

@Component({
  selector: 'app-credit-consumers',
  templateUrl: './credit-consumers.component.html',
  styleUrls: ['./credit-consumers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreditConsumersComponent implements OnInit {

  private data: Customer[] = [];
  private consumers: Customer[] = [];
  private nonConsumers: Customer[] = [];

  private goToCreditconsumerForm: any;
  private showProgressBar: boolean = false;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.showProgressBar = false;

    this.goToCreditconsumerForm = () => {
      this.showProgressBar = true;
      setTimeout(() => {
        this.router.navigate(['clientescreditosform']);
      },
        5000);
    }

    this.dataService.getLoansClients()
      .subscribe(data => {
        this.consumers = data.filter(x => x.loan > "0");
        this.nonConsumers = data.filter(x => x.loan === "0");
      });
  }

}
