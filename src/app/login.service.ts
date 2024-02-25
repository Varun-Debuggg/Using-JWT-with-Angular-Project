import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentuser:string="";
  constructor(private httpClinet:HttpClient, private router:Router) { }
  Checkuser(login:Login):Observable<any>
  {
    return this.httpClinet.post<any>("https://localhost:7124/api/Account/authenticate",login).pipe(map(u=>{
      if(u)
      {
        this.currentuser=u.username;
        sessionStorage['currentuser']=JSON.stringify(u);
      }
      return null;
    }))
  }
  Logout()
  {
    this.currentuser="";
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
