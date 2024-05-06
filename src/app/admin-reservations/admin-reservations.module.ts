import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminReservationsComponent } from './admin-reservations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "AdminReservation",
      urls: [{ title: "AdminReservation", url: "/adminreserv" }, { title: "AdminReservation" }],
    },
    component: AdminReservationsComponent,
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
export class AdminReservationsModule { }
