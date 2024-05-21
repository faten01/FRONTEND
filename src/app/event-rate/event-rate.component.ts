import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from '../services/about.service';
import { ReservationsService } from '../services/reservations.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-event-rate',
  templateUrl: './event-rate.component.html',
  styleUrls: ['./event-rate.component.scss']
})
export class EventRateComponent implements OnInit {



  searchText!: string;
  isImageEnlarged: boolean = false;
  stands: any[] = [];
  events: any[] = [];
  eventId:string | null = null;
  event:any
  model: any = {};
  token: any;
  userId: string | null = null;
  selectedStandId: string | null = null;
  successMessage !: string 
  errorMessage !: string 
  user!:any
  id:any
  data:any
  rating:any
  review:any


  constructor(
    private reservationService: ReservationsService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private getstand: AboutService,
    private login: LoginService,
    private getevent:AboutService,

  ) {}

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    this.user = this.login.customJwtDecode(this.token);
    this.getStands();
    this.getID();
    this.getEvents();

  


      this.fetchEventDetails();
    

    this.reservationService.selectedEventId$.subscribe(eventId => {
      this.model.event_id = eventId;
    });


    this.eventId=this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(params => {
      let event_id = params.get("id");
      this.id = this.eventId;
      this.geteventById(this.id);
      console.log(event_id)
      
    });
  }

  geteventById(eventId: string) {
    this.http.get(`http://127.0.0.1:8000/api/evenements/` + eventId).subscribe(res => {
      console.log(res)
      this.event = res
    })
  }


 

  fetchEventDetails(): void {
    if (this.eventId) {
      this.getevent.getEventbyId(this.eventId).subscribe(event => {
        this.event = event;
      });
    }
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

  getEvents() {

    this.getevent.getEvent().subscribe((res:any)=>  {
      console.log(res);
      this.events = res;
    });
  
  }

  submitReview(): void {
    const reviewData = {
      user_id: this.userId,
      event_id: this.eventId,
      rating: this.rating,
      review: this.review,
    };

    this.http.post('http://127.0.0.1:8000/api/ratings', reviewData).subscribe(
      response => {
        console.log('Review submitted successfully:', response);
        alert('Review submitted successfully!');
      },
      error => {
        console.error('Error submitting review:', error);
        alert('Failed to submit review. Please try again.');
      }
    );
  }

}
