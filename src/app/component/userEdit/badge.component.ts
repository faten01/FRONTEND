import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
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
export class BadgeComponent {

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

  constructor( private route : ActivatedRoute, private buttonsService :ButtonsService,private router: Router) { }

  



 

 

  ngOnInit() {
    
    this.userId=this.route.snapshot.paramMap.get('id');
    alert(this.userId);

    this.buttonsService.getUser(this.userId).subscribe((res:any) => {
      console.log(res)
      this.user =res.user
      
    });
    
  }

  updateUser() {
    var inputData={
     nom: this.user.nom,
     prenom: this.user.prenom,
     ville: this.user.ville,
     entreprise: this.user.entreprise,
     role:this.user.role
    }
    this.isLoading= true;


    this.buttonsService.updateUser(inputData,this.userId).subscribe((res:any)=>{
     

        console.log(res);
      
        this.isLoading= true;

    });
    } 
 

  
}
