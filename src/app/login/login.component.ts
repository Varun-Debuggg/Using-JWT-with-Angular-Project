import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from './../login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login:Login=new Login();
constructor(private loginService:LoginService,private router:Router) {}
LoginClick()
{
  this.loginService.Checkuser(this.login).subscribe(

    (response)=>{

      this.router.navigateByUrl("/home")
    },
    (error)=>{
      alert('wrong user/password')
      this.login.username="";
      this.login.password="";
      
    }
  )

}
}
