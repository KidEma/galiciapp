import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { TransaccionesDeRiesgoComponent } from './transacciones-de-riesgo/transacciones-de-riesgo.component'
import {CreditConsumersComponent} from './credit-consumers/credit-consumers.component'
import {ConsumerFormComponent} from './consumer-form/consumer-form.component'
import {TransactionFormComponent} from './transaction-form/transaction-form.component'

const routes: Routes = [
{
    path: '',
    component: DashboardComponent,
},
{
  path: 'transaccionesderiesgo',
  component: TransaccionesDeRiesgoComponent,
},
{
  path: 'transactionform',
  component: TransactionFormComponent,
},
{
  path: 'clientescreditos',
  component: CreditConsumersComponent,
},
{
  path: 'clientescreditosform',
  component: ConsumerFormComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
