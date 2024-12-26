import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { LandingComponent } from './components/landing/landing.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './data-access/shared.module';
import {AccessInterceptor} from './data-access/interceptors/access.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessInterceptor,
      multi: true,
    }
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
