import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
public getLoansClients: any = () => {
  return this.http.get('http://104.131.111.67:8080/loansFE')
  .map((response: Response) => response)
}
  constructor(private http: HttpClient) { }

}
