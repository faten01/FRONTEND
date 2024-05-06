import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private httpClient : HttpClient) { }

  getReservations(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/reservations`);
  }

  createReservation(reservation: any): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:8000/api/reservations/load`, reservation);
  }

  updateReservation(id: number, status: string): Observable<any> {
    return this.httpClient.patch(`http://127.0.0.1:8000/api/reservations/${id}`, { status: status });
  }
}
