import { JsonPipe } from '@angular/common';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor
 {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentuser={token:""};
    var currentUsersessionStorage = sessionStorage.getItem('currentuser');
    if(currentUsersessionStorage !=null)
    {
      currentUsersessionStorage=JSON.parse(currentUsersessionStorage);
    }
    req=req.clone({
      setHeaders:{
        Authorization:"Bearer " +currentuser.token
      
      }
    })
    return next.handle(req);
  }
}
