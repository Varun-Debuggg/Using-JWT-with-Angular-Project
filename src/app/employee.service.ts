import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Login } from './login';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
 getAllEmployee():Observable<any>
 {
  return this.httpClient.get<any>("https://localhost:7124/api/Employee");
 }
 SaveEmployee(employee:Employee):Observable<any>
 {
  return this.httpClient.post<any>("https://localhost:7124/api/Employee", employee);
 }
 updateEmployee(employee:Employee):Observable<any>
 {
 return this.httpClient.put<any>("https://localhost:7124/api/Employee", employee);
 }
 DeleteEmployee(id:number):Observable<any>
 {
  return this.httpClient.delete<any>("https://localhost:7124/api/Employee/" + id);
 }

}

