import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundoComponent } from './fundo/fundo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { RegisterAddressComponent } from './register-address/register-address.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatIconModule} from '@angular/material/icon';
import { PurchaseComponent } from './purchase/purchase.component';
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';




const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    FundoComponent,
    LoginComponent,
    RegisterComponent,
    RegisterCardComponent,
    RegisterAddressComponent,
    HomeComponent,
    PurchaseComponent,
    ComicsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    NgxPaginationModule,
    MatIconModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




