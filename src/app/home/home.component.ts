import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public paginaAtual = 1;

  constructor(private marvelService: MarvelService, private router: Router) { } // criando o objeto route

  public quadrinhosMarvel: any;

  ngOnInit(): void {
      this.marvelService.getMarvelComics().subscribe((resultado: any) =>{
        this.quadrinhosMarvel = resultado.data.results;
        debugger
        console.log(this.quadrinhosMarvel);
      })
  }
  goToDetail(id: string){
    this.router.navigate(['detalhes', id]);
  }

  
}
