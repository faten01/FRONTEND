import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Home",
      urls: [{ title: "Home", url: "/home" }, { title: "Home" }],
    },
    component: HomeComponent,
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
export class HomeModule { }
