import { Component } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewsService } from '../service/reviews.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent {

  reviews!: Review[];

  constructor(
    private service: ReviewsService,
    private router:Router,
  ) {}

  ngOnInit(): void {

    this.service.getReviews().subscribe(data => {
      this.reviews = data;
      this.reviews.splice(0,1);
    });

  }

  orderByScoreMaxMin() {
    this.reviews = this.reviews.sort(
      ((a, b) => a.score > b.score ? 1 : -1)
    )
  }

  orderByScoreMinMax() {
    this.reviews = this.reviews.sort(
      ((a, b) => a.score > b.score ? -1 : 1)
    )
  }

  orderByDateMaxMin() {
    this.reviews = this.reviews.sort((a, b) => {
      const dt1 = Date.parse(a.publicationDate);
      const dt2 = Date.parse(b.publicationDate);
      return dt1 - dt2
    })
  }

  orderByDateMinMax() {
    this.reviews = this.reviews.sort((a, b) => {
      const dt1 = Date.parse(a.publicationDate);
      const dt2 = Date.parse(b.publicationDate);
      return dt2 - dt1
    })
  }

  navigateToDetail(id:string){
    this.router.navigateByUrl('reviews-detail/' + id);
  }

}
