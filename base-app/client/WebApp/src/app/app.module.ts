// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/log-reg/login/login.component';
import { RegistrationComponent } from './components/log-reg/registration/registration.component';
import { LogRegComponent } from './components/log-reg/log-reg.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// PROVIDERS
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LogRegComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
