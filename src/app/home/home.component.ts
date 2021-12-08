import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }

  public quadrinhosMarvel: any;

  ngOnInit(): void {
      this.marvelService.chamadaQuadrinhosMarvel().subscribe((resultado: any) =>{
        this.quadrinhosMarvel = resultado.data.results;
        console.log(this.quadrinhosMarvel);
      })
  }

  // ChamaApi(){

  //   this.marvelService.chamadaQuadrinhosMarvel().subscribe((resultado: any) =>{
  //     if(resultado && resultado.data && resultado.data.results)
  //       this.quadrinhosMarvel = resultado.data.results;
  //       console.log(this.quadrinhosMarvel);
  //   })

  // }

}
