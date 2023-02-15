import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from 'src/app/model/review';
import { ReviewsService } from '../service/reviews.service';

@Component({
  selector: 'app-reviews-detail-content',
  templateUrl: './reviews-detail-content.component.html',
  styleUrls: ['./reviews-detail-content.component.css']
})
export class ReviewsDetailContentComponent implements OnInit {

  constructor(private reviewService: ReviewsService, private router: Router, private route: ActivatedRoute){}

  review$!: Observable<Review>;

    ngOnInit(): void {
      this.route.params.subscribe((p)=> {
        const id = p['id'];
        this.review$ = this.reviewService.getSingleReview(id);
      });

    }
}
