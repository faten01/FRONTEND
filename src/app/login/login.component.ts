import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[FormsModule, ReactiveFormsModule , NgFor, NgIf]

})
export class LoginComponent {

  constructor(private loginservice :LoginService){}


email!:string
MotDepasse!:string


PostData(){
  var LoginData = {
 
   email:this.email,
   MotDePasse:this.MotDepasse
  }


  this.loginservice.postUsers(LoginData).subscribe(
    (response) => {
      console.log('Response received:', response);
      
    },
    (error) => {
     
      console.error('Error occurred:', error.error);
    }
  );





}
}
