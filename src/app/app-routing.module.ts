import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ProfilerComponent } from './profiler/profiler.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //evitamos con [redirecto 'HomeComponent'] que se muestre duplicada la información
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent, pathMatch: 'full' },
  { path: 'profiler', component: ProfilerComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: 'HomeComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
