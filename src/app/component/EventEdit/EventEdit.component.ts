import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';
import { ButtonsService } from 'src/app/services/buttons.service';

@Component({
  templateUrl: 'EventEdit.component.html',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule , NgFor, NgIf
  ]
})
export class CardsComponent 
{
  user!:any
  eventId!:any
  id!:number
  nom!:String
  description!:string
  photo!:string
  ville!:string
  date!:string
  dateFin!:string
  successMessage !: string 
  errorMessage !: string 
  isLoading:boolean=false;
  data!:any

  public form = {
    id: null,
    nom: null,
    description: null,
    ville: null,
    date: null,
    dateFin: null,

    token: null
  }

  constructor( private route : ActivatedRoute, private event :AboutService,private router: Router, private httpclient:HttpClient) { }

  public message = ""
  public alert = ""
  _id: any



 

 

  ngOnInit() {
    
    this.eventId=this.route.snapshot.paramMap.get('_id');
    alert(this.eventId);

    this.route.paramMap.subscribe(params => {
      let eventId = params.get("_id");
      this._id = eventId;
      this.getEventById(this._id);
      console.log(eventId)
      
    });

    this.getEventById(this.eventId);
    
  }
  getEventById(eventId: string) {
    this.httpclient.get(`http://127.0.0.1:8000/api/evenements/` + eventId).subscribe(res => {
      console.log(res)
      this.data = res
      this.form = this.data.event;
    })
  }

  updateEvent(data:any) {
    console.log(data);
    this.isLoading= true;


    this.httpclient.put(`http://127.0.0.1:8000/api/evenements/`+data.id_event,data).subscribe((res:any)=>{
     

        console.log(res);
      
        this.isLoading= true;

    });
    } 
 
}
