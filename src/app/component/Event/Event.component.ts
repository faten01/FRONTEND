import { Component, } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  templateUrl: './Event.component.html',
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
  affiches:string[] = [];


 

  onSubmit() {
    console.log('Register form submitted with data:', this.userData);
    // Implement registration logic here
  }
  constructor(private aboutService : AboutService) {
  }

  handleImageChange(event: any): void {
    const files: File[] = Array.from(event.target.files);
    
    files.forEach((file: File) => {
      this.readFile(file);
    });
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String: string = reader.result as string;
      if (!this.affiches) {
        this.affiches = []; // Initialize photos as an array if it's not already
      }
      this.affiches.push(base64String);
    };
    reader.readAsDataURL(file);
  }

  resizeImage(imageURL: any): Promise<any> {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');
        if (ctx != null) {
          ctx.drawImage(image, 0, 0, 200, 200);
        }
        var data = canvas.toDataURL('image/jpeg', 1);
        resolve(data);
      };
      image.src = imageURL;
    });
  }

  postData() {
    var formData = { nom :this.nom,
      ville:this.ville,
      date:this.date,
     dateFin:this.dateFin,
     successMessage: this.successMessage,
     errorMessage: this.errorMessage,
     affiche: this.affiches.join(','),   

    
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
