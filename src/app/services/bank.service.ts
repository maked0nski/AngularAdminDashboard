import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BankService {


  constructor(private http: HttpClient) { }

  getBank(): Observable<any[]> {
    return this.http.get<any>(`https://bank.gov.ua/NBU_BankInfo/get_data_branch?json`);
  }
}
