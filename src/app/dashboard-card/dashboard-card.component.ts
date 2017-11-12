import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardCardComponent implements OnInit {
  @Input() data: DashboardCard;
  ngOnInit() {
  }
 
}

export interface DashboardCard {
content: string,
subtitle: string,
title: string,
imgSrc: string,
redirectTo: string
}

