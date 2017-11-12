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

    this.data = this.dataService.getLoansClients().subscribe(
      data => {
      this.consumers = data.filter(x => x.loan > "0");
      this.nonConsumers = data.filter(x => x.loan === "0");
      }
    );

  

    // this.http.get('http://104.131.111.67:8080/loansFE')
    // .subscribe((data: Array<any>) => {
    //   this.consumers = data.map(x =>  {
    //     id: x.id,
    //     first_name: x.name,
    //     last_name: 'Perón',
    //     doc_number: '123457',
    //     street_number: 'string',
    //     street_name: "12223456",
    //     city: 'Bariloche',
    //     state: 'Washington',
    //     zip: '123456',
    //     lat: 123456,
    //     lng: 3456,
    //     gender: "false",
    //     loan: "0"
    //   });
    //   console.log(data);
    // });

    // this.nonConsumers = [
    //   {
    //     id: '001',
    //     firstName: 'juan domingo',
    //     lastName: 'Perón',
    //     docNumber: '123457',
    //     streetNumber: 'string',
    //     streetName: "12223456",
    //     city: 'Bariloche',
    //     state: 'Washington',
    //     zip: '123456',
    //     lat: 123456,
    //     lng: 3456,
    //     gender: "false",
    //     loan: "0"
    //   }, {
    //     id: '001',
    //     firstName: 'juan domingo',
    //     lastName: 'Perón',
    //     docNumber: '123457',
    //     streetNumber: 'string',
    //     streetName: "12223456",
    //     city: 'Bariloche',
    //     state: 'Washington',
    //     zip: '123456',
    //     lat: 123456,
    //     lng: 3456,
    //     gender: "false",
    //     loan: "0"
        
    //   }, {
    //     id: '001',
    //     firstName: 'juan domingo',
    //     lastName: 'Perón',
    //     docNumber: '123457',
    //     streetNumber: 'string',
    //     streetName: "12223456",
    //     city: 'Bariloche',
    //     state: 'Washington',
    //     zip: '123456',
    //     lat: 123456,
    //     lng: 3456,
    //     gender: "false",
    //     loan: "0"
        
    //   },

    // ];
  }

}
