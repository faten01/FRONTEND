import { Component, } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  templateUrl: './about.component.html',
  standalone: true,
  imports: [ NgFor, NgIf,FormsModule],

})
export class AboutComponent {
  userData: any = {};
  nom! :String
  affiche!:string
  ville!:string
  date!:string
  dateFin!:string
  successMessage !: string 
  errorMessage !: string 
 

  onSubmit() {
    console.log('Register form submitted with data:', this.userData);
    // Implement registration logic here
  }
  constructor(private aboutService : AboutService) {
  }

  postData() {
    var formData = { nom :this.nom,
      affiche : this.affiche,
      ville:this.ville,
      date:this.date,
     dateFin:this.dateFin,
     successMessage: this.successMessage,
     errorMessage: this.errorMessage
    
    } 

    this.aboutService.saveEvent(formData).subscribe(
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
