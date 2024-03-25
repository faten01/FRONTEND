import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
userData: any={};
onSubmit() {
  console.log('Register form submitted with data:', this.userData);
}

}
