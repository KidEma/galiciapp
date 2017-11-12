import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule, 
  MatCardModule, 
  MatRadioModule, 
  MatButtonModule, 
  MatCheckboxModule,  
  MatRippleModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatTableModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule, 
  MatInputModule ,
  MatProgressBarModule
  
} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { ExampleComponent } from './example/example.component';
import { TransaccionesDeRiesgoComponent } from './transacciones-de-riesgo/transacciones-de-riesgo.component';
import { TransaccionesListaComponent } from './transacciones-lista/transacciones-lista.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { CreditConsumersComponent } from './credit-consumers/credit-consumers.component';
import { CreditConsumerListComponent } from './credit-consumer-list/credit-consumer-list.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumerFormResultComponent } from './consumer-form-result/consumer-form-result.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardCardComponent,
    ExampleComponent,
    TransaccionesDeRiesgoComponent,
    TransaccionesListaComponent,
    TransactionDetailComponent,
    CreditConsumersComponent,
    CreditConsumerListComponent,
    ConsumerFormComponent,
    ConsumerFormResultComponent,
    TransactionFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule, 
    MatCardModule, 
    MatRadioModule, 
    MatButtonModule, 
    MatCheckboxModule,  
    MatRippleModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule
    
  ],
  entryComponents: [
    TransactionDetailComponent,
    ConsumerFormResultComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [ 
   // CUSTOM_ELEMENTS_SCHEMA 
  ]
})
export class AppModule { }
