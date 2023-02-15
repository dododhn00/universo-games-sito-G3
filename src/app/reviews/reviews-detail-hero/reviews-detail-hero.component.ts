import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from 'src/app/model/review';
import { ReviewsService } from '../service/reviews.service';

@Component({
  selector: 'app-reviews-detail-hero',
  templateUrl: './reviews-detail-hero.component.html',
  styleUrls: ['./reviews-detail-hero.component.css']
})
export class ReviewsDetailHeroComponent {

  constructor(private reviewsService: ReviewsService, private router: Router, private route: ActivatedRoute){}

  review$!: Observable<Review>;

    ngOnInit(): void {
      this.route.params.subscribe((p)=> {
        const id = p['id'];
        this.review$ = this.reviewsService.getSingleReview(id);
        this.reviewsService.getSingleReview(id).subscribe()
      });
    }
}
