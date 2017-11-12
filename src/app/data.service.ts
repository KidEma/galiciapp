import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanProbabilityForm } from './loan-probability-form'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  public getLoansClients: any = () => {
    return this.http.get('http://104.131.111.67:8080/loansFE')
      .map((response: Response) => response)
  }

  public getTranfers: any = () => {
    return this.http.get('http://104.131.111.67:8080/transfersFE')
      .map((response: Response) => response)
  }

  public getLoanProbability(data: LoanProbabilityForm){    
   // http://104.131.111.67:8080/loanRequester?lat=-40.0000000&lng=-42.000000000&accounts=2&amount=20000&rewards=10&transaction=2&transactionTotalAmounts=10000
   return this.http.get(`http://104.131.111.67:8080/loanRequester?lat=${data.lat}&lng=${data.lng}&accounts=${data.accounts}&amount=${data.amount}&rewards=${data.rewards}&transaction=${data.transactions}&transactionTotalAmounts=${data.transactionTotalAmounts}`)
   .map((response: Response) => response)
  }
  
  constructor(private http: HttpClient) { }

}
