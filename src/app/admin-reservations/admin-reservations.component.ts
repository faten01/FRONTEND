import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss']
})
export class AdminReservationsComponent implements OnInit {

  reservations: any[] = [];

  constructor(private reservationService: ReservationsService) {}

  ngOnInit(): void {
    //this.loadReservations();
    this.fetchReservations();
  }

  loadReservations() {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  updateStatus(id: number, status: string) {
    this.reservationService.updateReservation(id, status).subscribe({
      next: (response) => {
        console.log('Status updated:', response);
        this.loadReservations(); // Reload to see updated status
      },
      error: (error) => console.error('Error updating reservation:', error)
    });
  }

  fetchReservations(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      console.log(reservations);
      this.reservations = reservations;
    });
  }




  

}
