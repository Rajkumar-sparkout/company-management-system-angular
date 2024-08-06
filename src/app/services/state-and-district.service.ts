import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateAndDistrictService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:3000'; 

  public getCountries(): Observable<any>{
    return this.http.get(this.backendUrl + '/getCountries');
  }

  public getStateByCountry(country: any): Observable<any>{
    return this.http.get(this.backendUrl + '/getStatesByCountry/' + country);
  }

  public getIndustry(): Observable<any>{
    return this.http.get(this.backendUrl + '/getIndustry');
  }
}
