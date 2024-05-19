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




  searchText!: string ;

  isImageEnlarged: boolean = false;
  stands: any[] = [];
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
  selectedStandId: string | null = null;
 //stand: any;

  constructor(private reservationService: ReservationsService,private route: ActivatedRoute, private router: Router, private http: HttpClient,
    private getstand:AboutService) {}

  onSubmit() {
    this.model.user_id = this.userId;
    this.reservationService.createReservation(this.model).subscribe({
      next: (response) => console.log('Reservation requested:', response),
      error: (error) => console.error('Error creating reservation:', error)
    });

}
submitReservation(): void {
  this.model.user_id = this.userId;
  if (!this.selectedStandId || !this.userId) {
    console.error('Cannot submit reservation: Stand ID or User ID is missing.');
    return;
  }

  // Create reservation data including both stand ID and user ID
  const reservationData = {
    stand_id: this.selectedStandId,
    user_id: this.userId
  };

  this.reservationService.createReservation(reservationData).subscribe({
    next: (response) => console.log('Reservation requested:', response),
    error: (error) => console.error('Error creating reservation:', error)
  });


}
showStandData(stand: any): void {
  // Accessing stand data
  const standId = stand.id_stand;
  const standNumero = stand.numero;
  const standSuperficie = stand.superficie;
  const standLongeur = stand.longeur;
  const standLargeur = stand.largeur;
  const standPrix = stand.prix;
  const standEtat = stand.etat;

  // Constructing stand data string
  const standDataHtml = `
    <p hidden><strong>Stand ID:</strong> ${standId}</p>
    <p><strong>Numéro:</strong> ${standNumero}</p>
    <p><strong>Superficie:</strong> ${standSuperficie} M²</p>
    <p><strong>Longeur:</strong> ${standLongeur} M</p>
    <p><strong>Largeur:</strong> ${standLargeur} M</p>
    <p><strong>Prix:</strong> ${standPrix} TND</p>
    <p><strong>État:</strong> ${standEtat}</p>
  `;

  // Inserting stand data into the modal
  const standDataContainer = document.getElementById('standDataContainer');
  if (standDataContainer) {
    standDataContainer.innerHTML = standDataHtml;
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
    this.onLoaderFunc();
    this.getStands();
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

onLoaderFunc(): void {
  const seatStructureElements = document.querySelectorAll('.seatStructure *');
  const displayerBoxesElements = document.querySelectorAll('.displayerBoxes *');
  seatStructureElements.forEach(element => {
    (element as HTMLElement).setAttribute('disabled', 'true');
  });
  displayerBoxesElements.forEach(element => {
    (element as HTMLElement).setAttribute('disabled', 'true');
  });
}

takeData(): void {
  const usernameInput = document.getElementById('Username') as HTMLInputElement;
  const numSeatsInput = document.getElementById('Numseats') as HTMLInputElement;
  const username = usernameInput.value;
  const numSeats = numSeatsInput.value;
  if (!username || !numSeats) {
    alert('Please Enter your Name and Number of Seats');
  } else {
    const inputFormElements = document.querySelectorAll('.inputForm *');
    const seatStructureElements = document.querySelectorAll('.seatStructure *');
    inputFormElements.forEach(element => {
      (element as HTMLElement).setAttribute('disabled', 'true');
    });
    seatStructureElements.forEach(element => {
      (element as HTMLElement).removeAttribute('disabled');
    });
    document.getElementById('notification')!.innerHTML = "<b style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</b>";
  }
}

updateTextArea(): void {
  const numSeatsInput = document.getElementById('Numseats') as HTMLInputElement;
  const numSeats = +numSeatsInput.value;
  const selectedSeats = document.querySelectorAll('input:checked');
  if (selectedSeats.length === numSeats) {
    const allSeatsVals = Array.from(selectedSeats).map(seat => (seat as HTMLInputElement).value);
    (document.getElementById('nameDisplay') as HTMLTextAreaElement).value = (document.getElementById('Username') as HTMLInputElement).value;
    (document.getElementById('NumberDisplay') as HTMLTextAreaElement).value = numSeatsInput.value;
    (document.getElementById('seatsDisplay') as HTMLTextAreaElement).value = allSeatsVals.join('\n');
    const seatStructureElements = document.querySelectorAll('.seatStructure *');
    seatStructureElements.forEach(element => {
      (element as HTMLElement).setAttribute('disabled', 'true');
    });
  } else {
    alert(`Please select ${numSeats} seats`);
  }
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

getStands() {

  this.getstand.getStands().subscribe((res:any)=>  {
    console.log(res);
    this.stands = res;
  });

}




getID(): void {
  this.token = localStorage.getItem('token');
  // Parse token to extract user ID (Assuming token contains user ID)
  const tokenData = JSON.parse(atob(this.token.split('.')[1]));
  this.userId = tokenData.id; // Store user ID

}

select(standId: string): void {
  this.selectedStandId = standId; 
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



