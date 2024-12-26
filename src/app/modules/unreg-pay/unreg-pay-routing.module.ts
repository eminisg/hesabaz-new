import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MerchantsComponent} from './components/merchants/merchants.component';
import {MerchantParametersComponent} from './components/merchant-parameters/merchant-parameters.component';
import {SingleBillingComponent} from './components/single-billing/single-billing.component';

const routes: Routes = [
  {path: '', component: MerchantsComponent},
  {path: 'parameters/:merchantType', component: MerchantParametersComponent},
  {path: 'single-billing', component: SingleBillingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UnregPayRoutingModule {
}
