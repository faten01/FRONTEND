import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EventTypeComponent } from './event-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "EventType",
      urls: [{ title: "EventType", url: "/type" }, { title: "EventType" }],
    },
    component: EventTypeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatFormFieldModule, // Make sure it's imported here

  ]
})
export class EventTypeModule { }
