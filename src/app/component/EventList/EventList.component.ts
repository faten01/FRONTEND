import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  NgbDropdownModule,
  NgbModule,
  NgbCollapseModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AboutService } from 'src/app/services/about.service';
import { ButtonsService } from 'src/app/services/buttons.service';
import { UserResponse } from 'stream-chat';

@Component({
  selector: 'app-dropdown-basic',
  standalone: true,
  imports: [NgbDropdownModule, NgbModule, NgbCollapseModule, NgFor, NgIf,RouterLink],
  templateUrl: './EventList.component.html',
})
export class NgbdDropdownBasicComponent {
  // This is for the collapse example
  

  constructor (private eventService: AboutService, private router: Router ){



	}
	evenements!: any [];

	ngOnInit() {

		this.getEventsList();
	 
		
	}
	getEventsList() {

		this.eventService.getEvent().subscribe((res:any)=>  {
			console.log(res);
			this.evenements = res;
		});
	}

	deleteEvent (eventId: number): void {
		this.eventService.deleteEvent(eventId).subscribe({
		  next: (response) => {
			console.log(response.message);
			// Optionally update the user status in your UI
		  },
		  error: (error) => {
			console.error('Error deactivating user:', error);
			
		  }
		});
	  }

}
