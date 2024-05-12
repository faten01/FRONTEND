import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { UserspaceService } from '../services/userspace.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input()
  rating!: number;
  get stars() {
    return Array(Math.floor(this.rating)).fill(0);
  }

  constructor(private userspaceservice : UserspaceService, private auth:AuthService, private router : Router, private login: LoginService) {}

  token:any;
  user:any;
    ngOnInit(){

      this.token = localStorage.getItem('token');
      this.user = this.login.customJwtDecode(this.token);
    }
}
