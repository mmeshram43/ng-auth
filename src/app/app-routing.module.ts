import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { EventsComponent } from './events/events.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path :'' , 
  component : HomepageComponent
},
  { path :'home' , 
    component : HomepageComponent
  },
  { path :'events' , 
  component : EventsComponent,
  canActivate : [AuthGuard]
  },
  { path :'book' , 
  canActivate : [AuthGuard],
    component : BookingComponent
  },
  {path :'login' , component : LoginPageComponent}
  // {path :'home' , component : HomepageComponent ,  canActivate : [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
