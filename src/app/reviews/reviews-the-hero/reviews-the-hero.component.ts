import { Component } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewsService } from '../service/reviews.service';

@Component({
  selector: 'app-reviews-the-hero',
  templateUrl: './reviews-the-hero.component.html',
  styleUrls: ['./reviews-the-hero.component.css']
})
export class ReviewsTheHeroComponent {

  reviews!: Review[];

  constructor(
    private service: ReviewsService
  ) {}

  ngOnInit(): void {

    this.service.getReviews().subscribe(data => {
      this.reviews = data.sort((a, b) => {
        const dt1 = Date.parse(a.publicationDate);
        const dt2 = Date.parse(b.publicationDate);
        return dt2 - dt1
      })
    });

  }

}
