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

<<<<<<< HEAD
  consultarCep(event:any, form: any){
    this.cepsService.buscar(event.target.value).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any){
=======
  consultarCep(event:any, form:any){
    this.cepsService.buscar(event.target.value).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados:any, form:any){
>>>>>>> 54e29703f400d1942cdea8ba64599b1d86df2635
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
