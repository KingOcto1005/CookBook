import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServicesDetailComponent } from './services/services-detail/services-detail.component';
import { ServiceItemComponent } from './services/services-list/service-item/service-item.component';
import { AppointmentsEditComponent } from './appointments/appointments-edit/appointments-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    ServicesComponent,
    HeaderComponent,
    ServicesListComponent,
    ServicesDetailComponent,
    ServiceItemComponent,
    AppointmentsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AppointmentsComponent,
    ServicesComponent,
    HeaderComponent,
    ServicesListComponent,
    ServicesDetailComponent,
    ServiceItemComponent,
    AppointmentsEditComponent


  ]
})
export class AppModule { }
