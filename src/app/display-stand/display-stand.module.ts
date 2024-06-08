import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayStandComponent } from './display-stand.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "displaystand",
      urls: [{ title: "displaystand", url: "/displaystand" }, { title: "displaystand" }],
    },
    component: DisplayStandComponent,
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
export class DisplayStandModule { }
