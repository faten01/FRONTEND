import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Notification",
      urls: [{ title: "Notification", url: "/notification" }, { title: "Notification" }],
    },
    component: NotificationComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotificationModule { }
