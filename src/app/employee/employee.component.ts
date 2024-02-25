import { Router } from '@angular/router';
import { Component, numberAttribute } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeelist:Employee[]=[];
  newEmployee:Employee=new Employee();
  editEmployee:Employee= new Employee();
  constructor(private router:Router, private employeeservice:EmployeeService){}
ngOnInit()
{
  alert(sessionStorage.getItem('currentUser'))
  if(sessionStorage.getItem('currentuser')==null)
  {
    alert('you are not authorize to access this page')
    this.router.navigateByUrl("/login")
  }

  this.getAllEmployee()
}
getAllEmployee()
{
  this.employeeservice.getAllEmployee().subscribe(
    (response)=>{
      this.employeelist=response;
    },
    (error)=>{
      console.log(error);
    }
   
  );
}
SaveClick(){
  this.employeeservice.SaveEmployee(this.newEmployee).subscribe(
    (response)=>{
      this.getAllEmployee();
      this.newEmployee.name="";
      this.newEmployee.address="";
      this.newEmployee.salary="";
    },
    (error)=>{
      console.log(error);
      
    }
  );
}
EditClick(emp:any)
{  
  this.editEmployee=emp;
}
updateclick()
{
  this.employeeservice.updateEmployee(this.editEmployee).subscribe(
    (response)=>{
      this.getAllEmployee();
    },
    (error)=>{
      console.log(error)
    }
    );

  
}
DeleteClick(id: number)
{
  this.employeeservice.DeleteEmployee(id).subscribe(
    (response)=>{
      this.getAllEmployee();
    },
 (error)=>{
  console.log(error)
 }
  )
}
}
