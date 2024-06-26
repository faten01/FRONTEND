import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserResponse {
  id:number
  nom:String
  prenom:string
  photo:string
  ville:string
  entreprise:string
  role:string
  successMessage: string 
  errorMessage: string 
  active: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
  
 
  constructor(private httpClient : HttpClient) { }


  updateUser(inputData: object, userId: any) {

    return this.httpClient.put(`http://127.0.0.1:8000/api/users/${userId}`,inputData);

  }
  

  getUsers() {
    return this.httpClient.get('http://127.0.0.1:8000/api/users');
  }

  getUser(userId : any){

    return this.httpClient.get(`http://127.0.0.1:8000/api/users/${userId}/`);

  }


  saveUser(formData:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/users',formData);


  }

  return(){
    return this.httpClient.get('http://127.0.0.1:8000/api/nom');

  }


  activateUser(userId: number): Observable<any> {
    return this.httpClient.put(`http://127.0.0.1:8000/api/users/${userId}/activate`, {});
  }

  deactivateUser(userId: number): Observable<any> {
    return this.httpClient.put(`http://127.0.0.1:8000/api/users/${userId}/deactivate`, {});
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8000/api/users/${userId}`, {});
  }
  
}
