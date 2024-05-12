import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { UserspaceService } from '../services/userspace.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  constructor(private userspaceservice : UserspaceService, private auth:AuthService, private router : Router, private login: LoginService) {}

  token:any;
  user:any;
    ngOnInit(){

      this.token = localStorage.getItem('token');
      this.user = this.login.customJwtDecode(this.token);
    }


}
