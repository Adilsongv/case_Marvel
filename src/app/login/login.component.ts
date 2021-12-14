import { Component, OnInit } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';


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
  strNickName: string;
  strPassword: string;

  constructor(private route: Router) {
    this.strNickName = 'txtNickName';
    this.strPassword = 'txtSenha';
   }

  ngOnInit(): void {
    // document.body.classList.add("container");
  }

  mostrar(){
    
  }
  logar(){
    if(this.strNickName && this.strPassword){
       Swal.fire("Usuario ou senha invalidos!");
    }
    else{
      this.route.navigate(['./home'])
    }  
  }

}
