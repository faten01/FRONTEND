import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable, BehaviorSubject, map } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private isLoggedIn = new BehaviorSubject<boolean>(false);


  constructor(private httpClient : HttpClient) {
    
  }

 

 


  register(RegisterData:object){
    return this.httpClient.post('http://127.0.0.1:8000/api/register',RegisterData)
   }

   postUsers(LoginData:object){
    return this.httpClient.post('http://127.0.0.1:8000/api/login',LoginData).pipe(tap((tokens)=>this.storeTokens(tokens)));
   }





   private storeTokens(tokens: any): void {
    localStorage.setItem('token', tokens.access_token);
  }

  private removeTokens(): void {
    localStorage.removeItem('token');
  }


  


  login(LoginData:any) {
    return this.httpClient.post('http://localhost:8000/api/login',LoginData);
  }






}
