import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-editype',
  templateUrl: './editype.component.html',
  styleUrls: ['./editype.component.scss']
})
export class EditypeComponent {
  user!:any
  typeId!:any
  id!:number
  type!:String
 
  successMessage !: string 
  errorMessage !: string 
  isLoading:boolean=false;
  data!:any

  public form = {
    id: null,
    type: null,
    photo: null,
    

    token: null
  }

  constructor( private route : ActivatedRoute, private event :AboutService,private router: Router, private httpclient:HttpClient) { }

  public message = ""
  public alert = ""
  _id: any



 

 

  ngOnInit() {
    
    this.typeId=this.route.snapshot.paramMap.get('_id');
    alert(this.typeId);

    this.route.paramMap.subscribe(params => {
      let typeId = params.get("_id");
      this._id = typeId;
      this.getTypeById(this._id);
      console.log(typeId)
      
    });

    this.getTypeById(this.typeId);
    
  }
  getTypeById(typeId: string) {
    this.httpclient.get(`http://127.0.0.1:8000/api/types/` + typeId).subscribe(res => {
      console.log(res)
      this.data = res
      this.form = this.data.type;
    })
  }

  updateType(data:any) {
    console.log(data);
    this.isLoading= true;


    this.httpclient.put(`http://127.0.0.1:8000/api/types/`+data.id_type,data).subscribe((res:any)=>{
     

        console.log(res);
      
        this.isLoading= true;

    });
    } 



    
 

}
