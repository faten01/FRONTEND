import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Login",
      urls: [{ title: "login", url: "/login" }, { title: "Login" }],
    },
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [ 
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
   
  ]
})
export class LoginModule { }
