import { Component } from '@angular/core';
import { NgbNavModule, NgbNavChangeEvent, NgbDropdownModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonsService, UserResponse } from 'src/app/services/buttons.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-ngbd-nav',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule, NgFor, NgIf, NgbAlertModule,RouterLink,ReactiveFormsModule,FormsModule],
	templateUrl: './nav.component.html',

})
export class NgbdnavBasicComponent {

	
	constructor (private buttonsService: ButtonsService ){



	}
	users!: UserResponse [];

	ngOnInit() {

		this.getUsersList();
	 
		
	}
	getUsersList() {

		this.buttonsService.getUsers().subscribe((res:any)=>  {
			console.log(res);
			this.users = res;
		});
	}


}
