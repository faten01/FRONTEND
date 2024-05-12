import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) {
  }

  postUsers(LoginData:object){
   return this.httpClient.post('http://127.0.0.1:8000/api/login',LoginData);
  }


  customJwtDecode(token: string) {
  return jwtDecode(token);
  }

  logout(token: string, router: Router){
    localStorage.removeItem(token);
    router.navigate(['/login'])

  }




}
