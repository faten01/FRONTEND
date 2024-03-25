import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgFor, NgIf } from '@angular/common';

import { AboutComponent } from "./about.component";
import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "About",
      urls: [{ title: "About", url: "/about" }, { title: "About" }],
    },
    component: AboutComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgbAlertModule,
    NgFor, NgIf
  ],
  declarations: [
  ],
})
export class AboutModule {}
