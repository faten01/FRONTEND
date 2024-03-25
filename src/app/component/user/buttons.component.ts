import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
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
    FormsModule, ReactiveFormsModule , NgFor
  ]
})
export class NgbdButtonsComponent  {
  nom! :String
  prenom!:string
  photo!:string
  ville!:string
  entreprise!:string
  role!:string
  isAdmin !: boolean 
  isExposant !: boolean 


  constructor(private buttonsService : ButtonsService) {}

  postData() {
    var formData = { nom :this.nom,
     prenom : this.prenom,
      ville:this.ville,
      entreprise:this.entreprise,
     role:this.role,
     photo:this.photo,
   isAdmin :this.isAdmin,
  isExposant:this.isExposant
    
    } 

  
    this.buttonsService.saveUser(formData).subscribe(
      (response) => {
        console.log('Response received:', response);
        // Handle the response from the server
      },
      (error) => {
       
        
        
        console.error('Error occurred:', error.error);
      }
    );


}

}