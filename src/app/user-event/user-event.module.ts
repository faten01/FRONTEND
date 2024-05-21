import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserEventComponent } from './user-event.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "events",
      urls: [{ title: "events", url: "/events" }, { title: "events" }],
    },
    component: UserEventComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserEventModule { }
