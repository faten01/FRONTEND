import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddNotifComponent } from './add-notif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Notif",
      urls: [{ title: "Notif", url: "/Notif" }, { title: "Notif" }],
    },
    component: AddNotifComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ]
})
export class AddNotifModule { }
