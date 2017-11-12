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
    content: "Consumidores con probabilidades de sacar un préstamo",
    imgSrc: "../assets/loans.png",
    redirectTo: "clientescreditos"
  }
  private card1: DashboardCard  =
    {
      title: "Transacciones de riesgo",   
      subtitle: "",      
      content: "Transacciones con posibilidades de ser fraudulentas.",
      imgSrc: "../assets/transactions.png",
      redirectTo: "transaccionesderiesgo"
    }
    private card2: DashboardCard  =
    {
      title: "Análisis de redes sociales",   
      subtitle: "",      
      content: "Detectar grupos de consumidores.",
      imgSrc: "../assets/twitter-black.jpg",
      redirectTo: "transaccionesderiesgo"
    }
    private card3: DashboardCard  =
    {
      title: "Seguridad informática",   
      subtitle: "",      
      content: "Detección de patrones poco comunes del usuario.",
      imgSrc: "../assets/security.png",
      redirectTo: "transaccionesderiesgo"
    }

    private card4: DashboardCard  =
    {
      title: "Optimización de Productos",   
      subtitle: "",      
      content: "Detección de segmentos no captados.",
      imgSrc: "../assets/automatic.png",
      redirectTo: "transaccionesderiesgo"
    }
    private card5: DashboardCard  =
    {
      title: "Recomendaciones",   
      subtitle: "",      
      content: "Motor de recomendaciones automática de productos.",
      imgSrc: "../assets/recommend.png",
      redirectTo: "transaccionesderiesgo"
    }
}
