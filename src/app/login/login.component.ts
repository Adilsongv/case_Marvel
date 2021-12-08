import { Component, OnInit } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { NgModule } from '@angular/core';


const maskConfig: Partial<IConfig> = {
  validation: false,
};



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login";
  NickName: string;

  constructor() {
    this.NickName = 'NickName';
   }

  ngOnInit(): void {
    // document.body.classList.add("container");
  }

  mostrar(){
    
  }

}
