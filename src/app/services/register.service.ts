import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient : HttpClient) {
   }

   postUsers(RegisterData:object){
    return this.httpClient.post('http://127.0.0.1:8000/api/register',RegisterData)
   }


}
