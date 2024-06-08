import { Component } from '@angular/core';
import { NgbAlertModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-ngbd-pagination',
  standalone: true,
  imports: [NgbPaginationModule, NgFor, NgIf,RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './StandList.component.html',
})
export class NgbdpaginationBasicComponent {

  constructor (private stand: AboutService, private router: Router , private deleteStand: AlertService){



	}
	stands!: any [];

	ngOnInit() {

		this.getStandsList();
	 
		
	}
	getStandsList() {

		this.stand.getStands().subscribe((res:any)=>  {
			console.log(res);
			this.stands = res;
		});
	}



	DeleteStand (standId: number): void {
		this.deleteStand.deleteStand(standId).subscribe({
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




 

