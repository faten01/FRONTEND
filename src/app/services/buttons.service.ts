import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor(private httpClient : HttpClient) { }

  saveUser(formData:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/users',formData);

   


  }
}
