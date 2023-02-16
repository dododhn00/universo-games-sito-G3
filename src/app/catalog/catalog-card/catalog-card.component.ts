import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Videogame } from 'src/app/model/videogame';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.css']
})
export class CatalogCardComponent implements OnInit {

  videogames!: Videogame[];
  areLanguagesShown!: boolean[];

  searchText = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });


  constructor(
    private service: CatalogService
  ) {}

  ngOnInit(): void {

    this.service.getVideoGames().subscribe(data => {
      this.videogames = data;
      this.areLanguagesShown = new Array<boolean>(data.length);
      this.areLanguagesShown.fill(false)

      this.searchText.valueChanges.subscribe((search) => {
        if (search !== "") {
          this.videogames = data.filter((it) =>
            it.title.toLocaleLowerCase().includes(search)
            || it.category.toLocaleLowerCase().includes(search)
            || it.genre.toLocaleLowerCase().includes(search)
            || it.softwareHouse.toLocaleLowerCase().includes(search)
            || it.publisher.toLocaleLowerCase().includes(search))
        }
        else {
          this.videogames = data;
        }
      })
    });


  }

  orderByAZ() {
    this.videogames = this.videogames.sort(
      ((a, b) => a.title > b.title ? 1 : -1)
    )
  }

  orderByZA() {
    this.videogames = this.videogames.sort(
      ((a, b) => a.title < b.title ? 1 : -1)
    )
  }

  orderByDateMinMax() {
    this.videogames = this.videogames.sort((a, b) => {
      const dt1 = Date.parse(a.releaseDate);
      const dt2 = Date.parse(b.releaseDate);
      return dt2 - dt1
    })
  }

  orderByDateMaxMin() {
    this.videogames = this.videogames.sort((a, b) => {
      const dt1 = Date.parse(a.releaseDate);
      const dt2 = Date.parse(b.releaseDate);
      return dt1 - dt2
    })
  }



  showLanguages(index:number) {
    if(this.areLanguagesShown[index]){
      this.areLanguagesShown[index] = false;
    }else{
      this.areLanguagesShown[index] = true;
    }
  }

}
