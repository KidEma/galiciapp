import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {  DashboardCard} from '../dashboard-card/dashboard-card.component' 



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent {
  private card0: DashboardCard = {
    title: "Consumidores de préstamos",   
    subtitle: "",      
    content: "consumidores con probabilidades de sacar un préstamo",
    imgSrc: "https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/img/pie-sample.png",
    redirectTo: "clientescreditos"
  }
  private card1: DashboardCard  =
    {
      title: "Transacciones de riesgo",   
      subtitle: "",      
      content: "Hay 10 transacciones de riesgo.",
      imgSrc: "https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/img/pie-sample.png",
      redirectTo: "transaccionesderiesgo"
    }
    private card2: DashboardCard  =
    {
      title: "Transacciones de riesgo",   
      subtitle: "",      
      content: "Hay 10 transacciones de riesgo.",
      imgSrc: "https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/img/pie-sample.png",
      redirectTo: "transaccionesderiesgo"
    }

}
