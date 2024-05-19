import { Input, Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgFor, NgIf } from '@angular/common';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf,FormsModule],
  templateUrl: 'alert.component.html',
  styles: [
    `
      .alert-custom {
        color: #cc4dd5;
        background-color: #f0c4f3;
        border-color: #f0c4f3;
      }
    `,
  ],
})
export class NgbdAlertBasicComponent  {

  numero! :String
  superficie!:Number
  longeur!:Number
  largeur!:Number
  etat!:string
  prix !:Number
  successMessage !: string 
  errorMessage !: string 
  photos: string[] = [];

  



[x: string]: any;
   /*formData : { numero :String,
  superficie:Number,
  
  longeur:Number,
  largeur:Number,
  etat:string,
  prix :Number} = { numero:"",
    superficie:0,
    
    longeur:0,
    largeur:0,
    etat:'',
    prix :0};*/

  
  constructor(private alertService : AlertService, private http: HttpClient,) {

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


 
  /*ngOnInit(): void {
    this.getDataFromServer();
  }
  getDataFromServer() {
    this.getData().subscribe(
      (data) => {
        console.log('Data received:', data);
        // Handle the received data here
      },
      (error) => {
        console.error('Error occurred:', error);
        // Handle the error here
      }
    );
  }

  getData() {
    return this.http.get<any>('http://127.0.0.1:8000/api/stands');
  }
  


  postData() {
    var formData : { numero :String,
      superficie:Number,
      
      longeur:Number,
      largeur:Number,
      etat:string,
      prix :Number} = { numero:"",
        superficie:0,
        
        longeur:0,
        largeur:0,
        etat:'',
        prix :0};
   
    this.http.post<any>('http://127.0.0.1:8000/api/stands', this.formData).subscribe(
      (response) => {
        console.log('Response received:', response);
        // Handle the response from the server
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }*/

  postData() {
    var formData = { numero :this.numero,
      superficie : this.superficie,
      longeur:this.longeur,
      largeur:this.largeur,
      etat:this.etat,
      prix :this.prix,
      successMessage: this.successMessage,
      errorMessage: this.errorMessage,
      photo: this.photos.join(''),   
    } 

   



   
    this.alertService.savestand(formData).subscribe(
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

