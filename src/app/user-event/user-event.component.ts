import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../services/about.service';
import { ReservationsService } from '../services/reservations.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss']
})
export class UserEventComponent {

  searchText!: string ;

  isImageEnlarged: boolean = false;
  events: any[] = [];
  model: any = {};
  token:any;
  num!:any
  nb!:any
  id!:any
  //stand!:any
  nom!:any
  photos: string[] = [];
  user!:any
  userId: string | null = null;
  selectedeventId: string | null = null;
 //stand: any;

  constructor(private reservationService: ReservationsService,private route: ActivatedRoute, private router: Router, private http: HttpClient,
    private getevent:AboutService,private login:LoginService ) {}

  onSubmit() {
    this.model.user_id = this.userId;
    this.reservationService.createReservation(this.model).subscribe({
      next: (response) => console.log('Reservation requested:', response),
      error: (error) => console.error('Error creating reservation:', error)
    });

}
submitReservation(): void {
  this.model.user_id = this.userId;
  
  if (!this.selectedeventId || !this.userId) {
    console.error('Cannot submit reservation: Stand ID or User ID is missing.');
    return;
  }

  // Create reservation data including both stand ID and user ID
  const reservationData = {
    event: this.selectedeventId,
    user_id: this.userId
    
  };

  this.reservationService.createReservation(reservationData).subscribe({
    next: (response) => console.log('Reservation requested:', response),
    error: (error) => console.error('Error creating reservation:', error)
  });


}
showStandData(event: any): void {
  // Accessing stand data
  const eventId = event.id_event;
  const eventNom = event.nom;
  const eventVille = event.ville;
  const eventDate = event.date;
  const eventDateFin = event.dateFin;


  // Constructing stand data string
  const eventDataHtml = `
    <p hidden><strong>Event ID:</strong> ${eventId}</p>
    <p><strong>Nom:</strong> ${eventNom}</p>
    <p><strong>ville:</strong> ${eventVille} M²</p>
    <p><strong>Date de début :</strong> ${eventDate} M</p>
    <p><strong>Date Fin:</strong> ${eventDateFin} M</p>
    
  `;

  // Inserting stand data into the modal
  const standDataContainer = document.getElementById('standDataContainer');
  if (standDataContainer) {
    standDataContainer.innerHTML = eventDataHtml;
  }

  // Displaying the modal
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


/*ngOnInit(): void {
  this.token = localStorage.getItem('token')

  this.route.paramMap.subscribe(params => {
    const userid = params.get("id");
    const nom = params.get("nom");
    this.nom =nom
    this.id = userid


  });*/
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = this.login.customJwtDecode(this.token);

    this.getEvents();
    this.getID();
    


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



/*getStands(): void {
  this.getstand.getStands()
    .subscribe(stands => {
      this.stands = stands;
    });
}*/

getEvents() {

  this.getevent.getEvent().subscribe((res:any)=>  {
    console.log(res);
    this.events = res;
  });

}




getID(): void {
  this.token = localStorage.getItem('token');
  // Parse token to extract user ID (Assuming token contains user ID)
  const tokenData = JSON.parse(atob(this.token.split('.')[1]));
  this.userId = tokenData.id; // Store user ID

}

select(eventId: number) {
  this.reservationService.setSelectedEventId(eventId);
  // You can also navigate to the reservation component if needed
}



filteredEvents(): any[] {
  if (!this.searchText) {
    return this.events;
  }
  return this.events.filter(event => {
    return event.nom.toString().includes(this.searchText);
  });
}

logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/login'])
}



}
