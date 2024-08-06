import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:3000'; 

  public createCustomer(customer: Customer): Observable<any>{
    return this.http.post(this.backendUrl + '/createCustomer', customer);
  }
}
