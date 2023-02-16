import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../../../catalog/service/catalog.service";
import {ActivatedRoute} from "@angular/router";
import {Videogame} from "../../../model/videogame";
import {ReviewsService} from "../../service/reviews.service";
import {Review} from "../../../model/review";

@Component({
  selector: 'app-reviews-detail-videogame',
  templateUrl: './reviews-detail-videogame.component.html',
  styleUrls: ['./reviews-detail-videogame.component.css']
})
export class ReviewsDetailVideogameComponent implements OnInit{

  constructor(private gameService:CatalogService,
              private route:ActivatedRoute,
              private reviewService:ReviewsService) {
    console.log('CIAO');
  }

  review!:Review;
  videogame?: Videogame;
  id = '';
  areLanguagesShown = false;


  ngOnInit() {


    this.route.params.subscribe((params) => {
      this.id = params['id'];
    })

    this.reviewService.getSingleReview(this.id).subscribe((review) => {
      this.review = review;

      this.gameService.getVideogame(this.review.reviewedGame.id).subscribe((res) => {
        this.videogame = res;
        console.log('test');
      });

    })




  }


  showLanguages() {
    if(this.areLanguagesShown){
      this.areLanguagesShown = false;
    }else{
      this.areLanguagesShown = true;
    }
  }

}
