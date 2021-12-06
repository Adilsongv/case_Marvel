import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  title = "Register";
  data = "Card Data";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  RegistrarEndereco(){
    this.route.navigate(['./endereco']);
  }
}
