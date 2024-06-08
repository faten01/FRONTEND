import { Component } from '@angular/core';
import { NgbNavModule, NgbNavChangeEvent, NgbDropdownModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonsService, UserResponse } from 'src/app/services/buttons.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-ngbd-nav',
	standalone: true,
	imports: [NgbNavModule, NgbDropdownModule, NgFor, NgIf, NgbAlertModule,RouterLink,ReactiveFormsModule,FormsModule, CommonModule],
	templateUrl: './nav.component.html',

})
export class NgbdnavBasicComponent {
	successMessage!: string;
	errorMessage!: string;
	

	
	constructor (private buttonsService: ButtonsService, private router: Router ){



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

	activateUser(userId: number): void {
		this.buttonsService.activateUser(userId).subscribe({
		  next: (response) => {
			console.log(response.message);
			// Optionally update the user status in your UI
		  },
		  error: (error) => {
			console.error('Error activating user:', error);
		  }
		});
	  }
	
	  deleteUser(userId: number): void {
		this.buttonsService.deleteUser(userId).subscribe({
		  next: (response) => {
			console.log(response.message);
			this.successMessage = 'User Deleted succesfully!';
        this.errorMessage = ''; 
			// Optionally update the user status in your UI
		  },
		  error: (error) => {
			console.error('Error deactivating user:', error);
			this.errorMessage = 'request failed.';
			this.successMessage = ''; // Clear any previous success message
		  }
		});
	  }


	  toggleUserStatus(user: any) {
		if (user.active) {
		  this.buttonsService.deactivateUser(user.id).subscribe(() => {
			user.active = false;
		  });
		} else {
		  this.buttonsService.activateUser(user.id).subscribe(() => {
			user.active = true;
		  });
		}
	  }
	


}
