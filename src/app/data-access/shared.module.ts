import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MerchantCardComponent} from '../components/merchant-card/merchant-card.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {FieldsComponent} from '../components/fields/fields.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MerchantCardComponent,
    SidebarComponent,
    FieldsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
    exports: [
        MerchantCardComponent,
        SidebarComponent,
        FieldsComponent,
    ],
})
export class SharedModule {}
