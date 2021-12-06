import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  title = "Register";
  data = "Account Data";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
logar(){
  this.route.navigate(['./cartao'])
  }
}
