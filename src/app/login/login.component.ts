import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';





@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[FormsModule, ReactiveFormsModule , NgFor, NgIf]

})



export class LoginComponent {
  
  
  constructor(private router:Router,private loginservice :LoginService, private authservice: AuthService){}

email!:string
MotDePasse!:string
role!:string
errors:any=[]





PostData(){
  var LoginData = {
   email:this.email,
   MotDePasse:this.MotDePasse,
  }



  this.loginservice.postUsers(LoginData).subscribe(
    (response:any ) => {
      console.log('Response received:', response);
      console.log('Response received:', response.token);

      localStorage.setItem('token', JSON.stringify(response.token))

      const role = response.role;

      // Check the role and redirect accordingly
      if (role === 'admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/userspace']);
      }
      
    },
    (err) => {
     
      console.error('Error occurred:', err.error);
      this.errors= err.error.errors
      console.error('Error occurred:', this.errors);

    }
  );

  




}


/*onSubmit(){
  var LoginData = {
    email:this.email,
    MotDePasse:this.MotDepasse,
   }

  // console.log(email, password);
  this.loginservice.postUsers(LoginData).subscribe((res:any)=>{
    // console.log(res);
    localStorage.setItem('user', JSON.stringify(res))

    const role = res.role;

      // Check the role and redirect accordingly
      if (role === 'admin') {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/userspace']);
      }

    
  },
  err=>{
    console.log(err);
  })
}*/


}
