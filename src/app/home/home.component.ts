import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public paginaAtual = 1;

  constructor(private marvelService: MarvelService) { }

  public quadrinhosMarvel: any;

  public vazio: boolean = false;

  ngOnInit(): void {
      this.marvelService.chamadaQuadrinhosMarvel().subscribe((resultado: any) =>{
        this.quadrinhosMarvel = resultado.data.results;
        debugger
        console.log(this.quadrinhosMarvel);
      })
  }

}
