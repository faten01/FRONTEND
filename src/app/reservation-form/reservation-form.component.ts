import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {
  searchText!: string;
  isImageEnlarged: boolean = false;
  stands: any[] = [];
  model: any = {};
  token: any;
  userId: string | null = null;
  selectedStandId: string | null = null;
  successMessage !: string 
  errorMessage !: string 

  constructor(
    private reservationService: ReservationsService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private getstand: AboutService
  ) {}

  ngOnInit(): void {
    this.getStands();
    this.getID();

    this.reservationService.selectedEventId$.subscribe(eventId => {
      this.model.event_id = eventId;
    });

    this.reservationService.selectedStandId$.subscribe(standId => {
      this.model.stand_id = standId;
    });
  }

  getID(): void {
    this.token = localStorage.getItem('token');
    if (this.token) {
      try {
        const tokenData = JSON.parse(atob(this.token.split('.')[1]));
        this.userId = tokenData.id;
        this.model.user_id = this.userId;
      } catch (e) {
        console.error('Error decoding token', e);
      }
    }
  }

  getStands(): void {
    this.getstand.getStands().subscribe((res: any) => {
      this.stands = res;
    });
  }

  submitReservation(): void {
    console.log('Reservation submitted:', this.model);

    const reservationData = {
      event_id: this.model.event_id,
      stand_id: this.model.stand_id,
      user_id: this.model.user_id,
    
    };

    this.reservationService.createReservation(reservationData).subscribe({
      next: (response) => {
        console.log('Reservation requested:', response);
        this.successMessage = 'Your reservation request have been succesfully sent.';
        this.errorMessage = ''; // Clear any previous error message
      },
      error: (error) => {
        console.error('Error creating reservation:', error);
        this.errorMessage = 'Your reservation request failed.';
        this.successMessage = ''; // Clear any previous success message
      }
    });
  }

  showStandData(stand: any): void {
    const standId = stand.id_stand;
    const standNumero = stand.numero;
    const standSuperficie = stand.superficie;
    const standLongeur = stand.longeur;
    const standLargeur = stand.largeur;
    const standPrix = stand.prix;
    const standEtat = stand.etat;

    const standDataHtml = `
      <p hidden><strong>Stand ID:</strong> ${standId}</p>
      <p><strong>Numéro:</strong> ${standNumero}</p>
      <p><strong>Superficie:</strong> ${standSuperficie} M²</p>
      <p><strong>Longeur:</strong> ${standLongeur} M</p>
      <p><strong>Largeur:</strong> ${standLargeur} M</p>
      <p><strong>Prix:</strong> ${standPrix} TND</p>
      <p><strong>État:</strong> ${standEtat}</p>
    `;

    const standDataContainer = document.getElementById('standDataContainer');
    if (standDataContainer) {
      standDataContainer.innerHTML = standDataHtml;
    }

    const modal = document.getElementById('standDataModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeStandDataModal(): void {
    const modal = document.getElementById('standDataModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  toggleImageSize(imageSrc: string): void {
    const img = document.getElementById('modalImg') as HTMLImageElement;
    if (this.isImageEnlarged) {
      img.style.transform = "scale(1)";
      img.style.transition = "transform 0.25s ease";
    } else {
      img.src = imageSrc;
      img.style.transform = "scale(1.5)";
      img.style.transition = "transform 0.25s ease";
    }
    this.isImageEnlarged = !this.isImageEnlarged;
  }

  enlargeImg(event: MouseEvent): void {
    const img = event.target as HTMLImageElement;
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.25s ease";
  }

  resetImg(event: MouseEvent): void {
    const img = event.target as HTMLImageElement;
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.25s ease";
  }

  openModal(src: string): void {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg') as HTMLImageElement;
    modalImg.src = src;
    modal!.style.display = 'block';
  }

  closeModal(): void {
    const modal = document.getElementById('myModal');
    modal!.style.display = 'none';
  }

  select(standId: number): void {
    this.reservationService.setSelectedStandId(standId);
  }

  filteredStands(): any[] {
    if (!this.searchText) {
      return this.stands;
    }
    return this.stands.filter(stand => {
      return stand.numero.toString().includes(this.searchText);
    });
  }
}
