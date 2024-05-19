import { Component } from '@angular/core';
import { NgbAlertModule, NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';



@Component({
  selector: 'app-ngbd-pagination',
  standalone: true,
  imports: [NgbPaginationModule, NgFor, NgIf,RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './StandList.component.html',
})
export class NgbdpaginationBasicComponent {

  constructor (private stand: AboutService, private router: Router ){



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
 
}
