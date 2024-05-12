import { Component, OnInit } from '@angular/core';
import { UserspaceService } from '../services/userspace.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  constructor(private userspaceservice : UserspaceService, private auth:AuthService, private router : Router, private login: LoginService) {}

  token:any;
  user:any;
    ngOnInit(){

      this.token = localStorage.getItem('token');
      this.user = this.login.customJwtDecode(this.token);
    }
}
