import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgIf } from '@angular/common';
//declare var $: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[RouterModule, CommonModule, NgIf],
  templateUrl: './sidebar.component.html'
  
})
export class SidebarComponent implements OnInit {
  sidebarnavItems: RouteInfo[] | undefined;

  constructor() {}

  ngOnInit() {
    this.sidebarnavItems = [
      { path: '/dashboard', title: 'Dashboard', icon: 'bi bi-graph-up', class: '', extralink: false },
      { path: '/component/alert', title: 'Stand', icon: 'bi bi-plus-circle', class: 'bi bi-plus-circle', extralink: false },
      { path: '/component/buttons', title: 'Users', icon: 'bi bi-people', class: '', extralink: false },
      { path: '/about', title: 'Evenément', icon: 'bi bi-calendar-event', class: '', extralink: false }
      // Add or update more items as needed
    ];
  }
}