import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantsComponent } from './components/merchants/merchants.component';
import {UnregPayRoutingModule} from './unreg-pay-routing.module';
import {SharedModule} from '../../data-access/shared.module';
import { MerchantParametersComponent } from './components/merchant-parameters/merchant-parameters.component';
import { SingleBillingComponent } from './components/single-billing/single-billing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [MerchantsComponent, MerchantParametersComponent, SingleBillingComponent],
  imports: [
    CommonModule,
    UnregPayRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class UnregPayModule { }
