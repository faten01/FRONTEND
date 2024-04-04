import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Navbar",
      urls: [{ title: "navbar", url: "/navbar" }, { title: "navbar" }],
    },
    component: NavbarComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class NavbarModule { }
