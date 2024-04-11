import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BlogCardsComponent } from '../dashboard/dashboard-components/blog-cards/blog-cards.component';
import { FeedsComponent } from '../dashboard/dashboard-components/feeds/feeds.component';
import { SalesRatioComponent } from '../dashboard/dashboard-components/sales-ratio/sales-ratio.component';
import { TopCardsComponent } from '../dashboard/dashboard-components/top-cards/top-cards.component';
import { TopSellingComponent } from '../dashboard/dashboard-components/top-selling/top-selling.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ChatComponent } from './chat.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Chat",
      urls: [{ title: "Chat", url: "/chat" }, { title: "Chat" }],
    },
    component: ChatComponent,
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
    NgApexchartsModule,
  ]
})
export class ChatModule { }
