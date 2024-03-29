import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ButtonsService } from 'src/app/services/buttons.service';


interface buttonsData {
  btn: string;
  icon: string;
}

@Component({
  selector: 'app-ngbd-buttons',
  standalone: true,
  templateUrl: 'buttons.component.html',
  imports: [
    FormsModule, ReactiveFormsModule , NgFor, NgIf
  ]
})
export class NgbdButtonsComponent  {
  nom! :String
  prenom!:string
  photo!:string
  ville!:string
  entreprise!:string
  role!:string
  successMessage !: string 
  errorMessage !: string 
  id!:number
  isLoading:boolean=false;



  constructor(private buttonsService : ButtonsService) {}

  postData() {
    var formData = { 
      id:this.id,
      nom :this.nom,
     prenom : this.prenom,
      ville:this.ville,
      entreprise:this.entreprise,
     role:this.role,
     photo:this.photo,
     successMessage: this.successMessage,
     errorMessage: this.errorMessage,
     
 
    
    } 

  
    this.buttonsService.saveUser(formData).subscribe(
      (response) => {
        console.log('Response received:', response);
        this.successMessage = 'Form submitted successfully.';
        // Handle the response from the server
      },
      (error) => {
       
        
        
        console.error('Error occurred:', error.error);
        this.errorMessage = 'Form submission failed.';
      }
    );


}

}