import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
interface Reservation {
  reservation_id: number;
  user: {
    nom: string;
    prenom: string;
  };
  event: {
    nom: string;
  };
  status: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  

  constructor(private httpClient : HttpClient) { }
  


  getReservations(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/reservationss`);
  }

  createReservation(reservation: any): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:8000/api/reservations/load`, reservation);
  }

  updateReservation(id: number, status: string): Observable<any> {
    return this.httpClient.patch(`http://127.0.0.1:8000/api/reservations/${id}`, { status: status },);
  }


  private selectedEventId = new BehaviorSubject<number | null>(null);
  private selectedStandId = new BehaviorSubject<number | null>(null);

  selectedEventId$ = this.selectedEventId.asObservable();
  selectedStandId$ = this.selectedStandId.asObservable();

  setSelectedEventId(eventId: number) {
    this.selectedEventId.next(eventId);
  }

  setSelectedStandId(standId: number) {
    this.selectedStandId.next(standId);
  }



getuserId(userId:any): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/users/${userId}`);
  }



}
