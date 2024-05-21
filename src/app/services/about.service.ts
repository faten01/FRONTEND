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
  getEvent(){
    return this.httpClient.get<any[]>('http://127.0.0.1:8000/api/evenements');
  

  }
UpdateEvent(formData:any,eventId:any){
    return this.httpClient.put(`http://127.0.0.1:8000/api/evenements/${eventId}`,formData);

  }

  getEventbyId(eventId:any){
    return this.httpClient.get<any[]>(`http://127.0.0.1:8000/api/evenements/${eventId}`);
  

  }


  getStands() {
    return this.httpClient.get<any[]>('http://127.0.0.1:8000/api/stands');
  }
}
