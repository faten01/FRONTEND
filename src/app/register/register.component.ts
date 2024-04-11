import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports:[FormsModule, ReactiveFormsModule , NgFor, NgIf]
})
export class RegisterComponent {
userData: any={};
onSubmit() {
  console.log('Register form submitted with data:', this.userData);
}

constructor(private registerservice :RegisterService){}

nom!:string
prenom!:string
email!:string
telephone!:string
MotDepasse!:string


PostData(){
  var RegisterData = {
  nom:this.nom,
   prenom:this.prenom,
   email:this.email,
   telephone:this.telephone,
   MotDePasse:this.MotDepasse
  }


  this.registerservice.postUsers(RegisterData).subscribe(
    (response) => {
      console.log('Response received:', response);
      
    },
    (error) => {
     
      console.error('Error occurred:', error.error);
    }
  );













}


}
