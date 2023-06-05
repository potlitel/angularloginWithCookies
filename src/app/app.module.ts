import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ProfilerComponent } from './profiler/profiler.component';

import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    FeaturesComponent,
    ProfilerComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MaterialModule],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
