import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const strNickName = localStorage.getItem('lsNickName');
const strFirstName = localStorage.getItem('lsFirstName');
const strLastName = localStorage.getItem('lsLastName');
const strEmail = localStorage.getItem('lsEmail');
const strContact = localStorage.getItem('lsContact');
const strPassWord = localStorage.getItem('lsPassWord');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  title = "Register";
  data = "Account Data";

  formGroupProfile = new FormGroup({
    nickname: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private route: Router) { }

  
  ngOnInit(): void {
  }
   public validarCampo(){
    if(strNickName != '' && strFirstName != '' && strLastName != '' &&  strEmail != '' &&  strContact != '' &&  strPassWord != '' ){
      Swal.fire('This Fields cannot be empty!');
    }
    else{
      // localStorage.setItem('lsNickName');
      // localStorage.setItem('lsFirstName');
      // localStorage.setItem('lsLastName');
      // localStorage.setItem('lsEmail');
      // localStorage.setItem('lsContact');
      // localStorage.setItem('lsPassWord');
    }
   } 
   public goToCard(){
      if(strNickName != '' && strFirstName != '' && strLastName != '' &&  strEmail != '' &&  strContact != '' &&  strPassWord != '' ){
        this.route.navigate(['./cartao'])
      }
      else{
        Swal.fire('Fields with (*) must be filled !');
      }
    }
}
