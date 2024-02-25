import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  constructor(private router:Router) {}
  ngOnInit()
  {
    //alert(sessionStorage.getItem('currentUser'))
    if(sessionStorage.getItem('currentuser')==null)
    {
      alert('you are not authorize to access this page')
      this.router.navigateByUrl("/login")
    }
  }
}
