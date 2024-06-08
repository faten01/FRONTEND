import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../services/about.service';
import { LoginService } from '../services/login.service';
import { ReservationsService } from '../services/reservations.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.scss']
})
export class AddtypeComponent {
  userData: any = {};
  type! :String
  photo!:string
  ville!:string
  date!:string
  dateFin!:string
  successMessage !: string 
  errorMessage !: string 
  photos:string[] = [];


 

  onSubmit() {
    console.log('Register form submitted with data:', this.userData);
    // Implement registration logic here
  }
  constructor(private aboutService : AboutService, private posttype: AlertService) {
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
      if (!this.photos) {
        this.photos = []; // Initialize photos as an array if it's not already
      }
      this.photos.push(base64String);
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
    var formData = { type :this.type,
    
     photo: this.photos.join(','),   

    
    } 

    this.posttype.savetype(formData).subscribe(
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
