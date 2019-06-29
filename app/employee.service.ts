import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Employee} from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  apiURL: string = 'http://dummy.restapiexample.com/api/v1/';

  constructor(private httpClient: HttpClient) {}

  /*getEmployees(): Observable<Employee[]> {
    // TODO: send the message _after_ fetching the heroes

    return this.httpClient.get<Employee[]>(`/assets/employee.json`);


   
  }*/
 private listemp :Employee[]=[{"id":"73634","employee_name":"yuuuniia","employee_salary":"12131212","employee_age":"1312","profile_image":""},
 {"id":"74634","employee_name":"Nile","employee_salary":"12131212","employee_age":"1312","profile_image":""}];
  getEmployees():Employee[]{

    return this.listemp;



  }
}