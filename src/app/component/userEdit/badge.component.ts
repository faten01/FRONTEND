import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonsService } from "src/app/services/buttons.service";
@Component({
  templateUrl: "badge.component.html",
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule , NgFor, NgIf
  ]
})
export class BadgeComponent implements OnInit {

  user!:any
  userId!:any
  id!:number
  nom!:String
  prenom!:string
  photo!:string
  ville!:string
  entreprise!:string
  role!:string
  successMessage !: string 
  errorMessage !: string 
  isLoading:boolean=false;
  data!:any

  public form = {
    id: null,
    nom: null,
    prenom: null,
    ville: null,
    entreprise: null,
    role: null,
    telephone: null,

    token: null
  }

  constructor( private route : ActivatedRoute, private buttonsService :ButtonsService,private router: Router, private httpclient:HttpClient) { }

  public message = ""
  public alert = ""
  _id: any



 

 

  ngOnInit() {
    
    this.userId=this.route.snapshot.paramMap.get('_id');
    alert(this.userId);

    this.route.paramMap.subscribe(params => {
      let userId = params.get("_id");
      this._id = userId;
      this.getUserById(this._id);
      console.log(userId)
      
    });

    this.getUserById(this.userId);
    
  }
  getUserById(userId: string) {
    this.httpclient.get(`http://127.0.0.1:8000/api/users/` + userId).subscribe(res => {
      console.log(res)
      this.data = res
      this.form = this.data.user;
    })
  }

  updateUser(data:any) {
    console.log(data);
    this.isLoading= true;


    this.httpclient.put(`http://127.0.0.1:8000/api/users/`+data.id,data).subscribe((res:any)=>{
     

        console.log(res);
      
        this.isLoading= true;

    });
    } 
 

  
}
