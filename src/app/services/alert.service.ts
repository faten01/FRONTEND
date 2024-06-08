import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private httpClient:  HttpClient) {
    
  }

  savestand(formData:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/stands',formData);
  }

 getstands(){
    return this.httpClient.get('http://127.0.0.1:8000/api/stands');
  }

  deleteStand(standId: number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/stands/${standId}`, {});
  }

  savetype(formData:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/types',formData);
  }

  gettype(){
    return this.httpClient.get('http://127.0.0.1:8000/api/types');
  }


}
