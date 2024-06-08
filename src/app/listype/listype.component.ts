import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { UserspaceService } from '../services/userspace.service';

@Component({
  selector: 'app-listype',
  templateUrl: './listype.component.html',
  styleUrls: ['./listype.component.scss']
})
export class ListypeComponent {
  rating!: number;
  types: any[] = [];

  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }

  constructor(private userspaceservice : UserspaceService, private auth:AuthService, private router : Router, private login: LoginService, 
    private gettype: AlertService) {}

  token:any;
  user:any;
    ngOnInit(){

      this.token = localStorage.getItem('token');
      this.user = this.login.customJwtDecode(this.token);
      this.gettypes();
    }


    gettypes(): void {
      this.gettype.gettype().subscribe((res: any) => {
        this.types = res;
      });
    }


   

    Deletetype (typeId: number): void {
      this.userspaceservice.deleteType(typeId).subscribe({
        next: (response) => {
        console.log(response.message);
        // Optionally update the user status in your UI
        },
        error: (error) => {
        console.error('Error deactivating user:', error);
        
        }
      });
      }
  

}
