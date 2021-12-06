import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {
  title = "Register";
  data = "Address Data";

  constructor(private  cepsService: CepServiceService){}

  consultarCep(valor:number, form){
    this.cepsService.buscar(valor).subscribe((dados) => this.populaForm(dados.form));
  }

  populaForm(dados, form){
    form.setvalue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }
  ngOnInit(): void {
  }

 
}
