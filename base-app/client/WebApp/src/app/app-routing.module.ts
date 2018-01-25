// MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { LogRegComponent } from './components/log-reg/log-reg.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { RegistrationComponent } from './components/log-reg/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LogRegComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
