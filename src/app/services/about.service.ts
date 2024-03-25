import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private httpClient :HttpClient) { }

  saveEvent(formData:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/evenements',formData);

   


  }
}
