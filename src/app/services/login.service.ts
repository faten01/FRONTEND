import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) {
  }

  postUsers(LoginData:object){
   return this.httpClient.post('http://127.0.0.1:8000/api/login',LoginData)
  }}
