import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'cartao', component: RegisterCardComponent },
  { path: 'endereco', component: RegisterAddressComponent },
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
