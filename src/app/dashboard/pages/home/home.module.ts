import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
  declarations: [
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CalendarModule.forRoot({ 
      provide: DateAdapter, 
      useFactory: adapterFactory 
    }),
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
