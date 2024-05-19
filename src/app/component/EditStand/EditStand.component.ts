import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-loader',
  templateUrl: './EditStand.component.html',
  styleUrls: ['./EditStand.component.scss'],
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule , NgFor, NgIf
  ]

})
export class LoaderComponent {

  ser!:any
  standId!:any
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
    numero: null,
    superficie: null,
    longeur: null,
    date: null,
    dateFin: null,

    token: null
  }

  constructor( private route : ActivatedRoute, private stand :AboutService,private router: Router, private httpclient:HttpClient) { }

  public message = ""
  public alert = ""
  _id: any



 

 

  ngOnInit() {
    
    this.standId=this.route.snapshot.paramMap.get('_id');
    alert(this.standId);

    this.route.paramMap.subscribe(params => {
      let standId = params.get("_id");
      this._id = standId;
      this.getstandById(this._id);
      console.log(standId)
      
    });

    this.getstandById(this.standId);
    
  }
  getstandById(standId: string) {
    this.httpclient.get(`http://127.0.0.1:8000/api/stands/` + standId).subscribe(res => {
      console.log(res)
      this.data = res
      this.form = this.data.event;
    })
  }

  updateStand(data:any) {
    console.log(data);
    this.isLoading= true;


    this.httpclient.put(`http://127.0.0.1:8000/api/stands/`+data.id_stand,data).subscribe((res:any)=>{
     

        console.log(res);
      
        this.isLoading= true;

    });
    } 

}
