import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../services/marvel.service';
// importar activatedRoute e MarvelService
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {
  id = '';
  comics: any;
  data = new Date('2029-12-31T00:00:00-0500');

  constructor(private route: ActivatedRoute, private marvel: MarvelService, public dialog: MatDialog, private rota: Router) {
    this.id = this.route.snapshot.paramMap.get("id") as string; // pegando um "pedaço da rota mapeada" que foi passada como paramentro
   }

   openDialog(){
    //  const dialogRef = this.dialog.open(PurchaseComponent,{
    //  });
    //  dialogRef.afterClosed().subscribe( results =>{
    // });
    Swal.fire('Successful purchase!');
    this.rota.navigate(['./home']);
   }
   
  ngOnInit(): void {
    this.marvel.getMarvelComicsById(this.id).subscribe(
      data => {
        this.comics = data.data.results[0];
        this.data = this.comics.dates[0].date;
      }
    )
  }
  

}
