import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { id } from 'date-fns/locale';


export interface Event {
  id_event: number;
  nom: string;
  date: Date;
  dateFin: Date;
  ville:string
  // Add any other properties you need
}

@Injectable({
  providedIn: 'root'
})
export class UserspaceService {

  constructor(private httpClient : HttpClient) { }

  postEvents(eventData:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/evenements',eventData);
  }


 getEvents():Observable<Event[]>{
    return this.httpClient.get<Event[]>(`http://127.0.0.1:8000/api/evenements`);
  }


  deleteType(typeId: number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/types/${typeId}`, {});
  }

  UpdateType(formData:any,typeId:any){
    return this.httpClient.put(`http://127.0.0.1:8000/api/evenements/${typeId}`,formData);

  }
}
