import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {
  id = ''
  comic: any;
  constructor(private route: ActivatedRoute,
    private marvel: MarvelService) {
      this.id = this.route.snapshot.paramMap.get("id") as string;
     }

  ngOnInit(): void {
    this.marvel.getMarvelComicsById(this.id).subscribe(
      data => {
        this.comic = data.data.results[0]
        console.log(data.data.results[0])
      }
    )
  }

}
