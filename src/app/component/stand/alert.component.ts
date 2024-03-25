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

  
  constructor(private alertService : AlertService) {

    

   
   
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
    } 

   



   
    this.alertService.savestand(formData).subscribe(
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

