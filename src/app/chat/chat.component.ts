import { Component, OnInit } from '@angular/core';
import { UserspaceService } from '../services/userspace.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { TranslateModule } from '@ngx-translate/core';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';
import { ReservationsService } from '../services/reservations.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})


export class ChatComponent implements OnInit {
  constructor(private userspaceservice : UserspaceService, private auth:AuthService, private router : Router, private login: LoginService,
    private reservationService: ReservationsService) {}

  token:any;
  user:any;
  reservations: any[] = [];
  model: any = {};
  userId: string | null = null;
  filteredReservations: any[] = [];

    ngOnInit(){

      this.token = localStorage.getItem('token');
      this.user = this.login.customJwtDecode(this.token);

      this.loadReservations();
      this.getID();

      this.token = localStorage.getItem('token');
      if (this.token) {
        this.user = this.login.customJwtDecode(this.token);
        this.getID();
        this.loadReservations();
      }

    }


    loadReservations() {
      this.reservationService.getReservations().subscribe(reservations => {
        this.reservations = reservations;
        this.filterReservations();

      });
    }


    getI2D(): void {
      if (this.token) {
        try {
          const tokenData = JSON.parse(atob(this.token.split('.')[1]));
          this.userId = tokenData.id;
          this.model.user_id = this.userId;
          this.filterReservations(); // Call to filter reservations immediately after getting the userId
        } catch (e) {
          console.error('Error decoding token', e);
        }
      }

}

getID(): void {
  this.token = localStorage.getItem('token');
  if (this.token) {
    try {
      const tokenData = JSON.parse(atob(this.token.split('.')[1]));
      this.userId = tokenData.id;
      this.model.user_id = this.userId;
      console.log(this.userId)
      this.filterReservations(); // Call to filter reservations immediately after getting the userId

    } catch (e) {
      console.error('Error decoding token', e);
    }
  }
}

filterReservations() {
  if (this.userId) {
    this.filteredReservations = this.reservations.filter(reservations => reservations.user_id === this.userId);
  }
  
}


}
