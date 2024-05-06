import { Component } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {

  model: any = {};

  constructor(private reservationService: ReservationsService) {}

  onSubmit() {
    this.reservationService.createReservation(this.model).subscribe({
      next: (response) => console.log('Reservation requested:', response),
      error: (error) => console.error('Error creating reservation:', error)
    });

}
}
