import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';


const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'unreg-payment', pathMatch: 'full'},
      {
        path: 'unreg-payment',
        loadChildren: () => import('./modules/unreg-pay/unreg-pay.module').then(m => m.UnregPayModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
