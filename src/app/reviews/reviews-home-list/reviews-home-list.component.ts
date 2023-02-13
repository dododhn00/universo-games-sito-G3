import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewsService } from '../service/reviews.service';

@Component({
  selector: 'app-reviews-home-list',
  templateUrl: './reviews-home-list.component.html',
  styleUrls: ['./reviews-home-list.component.css']
})
export class ReviewsHomeListComponent implements OnInit{

  reviews!: Review[];

  heroReviews: Review[] = [];

  constructor(private reviewService:ReviewsService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(data => {
      this.reviews = data;
      this.reviews = this.reviews.sort((a, b) => {
        const dt1 = Date.parse(a.publicationDate);
        const dt2 = Date.parse(b.publicationDate);
        return dt2-dt1
      });
      for(let i=0; i<3; i++)
      {
        this.heroReviews.push(this.reviews[i]);
      };
    });
  }

}
