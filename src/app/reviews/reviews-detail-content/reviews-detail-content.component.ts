import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Review } from 'src/app/model/review';
import { ReviewsService } from '../service/reviews.service';

@Component({
  selector: 'app-reviews-detail-content',
  templateUrl: './reviews-detail-content.component.html',
  styleUrls: ['./reviews-detail-content.component.css']
})
export class ReviewsDetailContentComponent {

  constructor(private reviewsService: ReviewsService, private router: Router, private route: ActivatedRoute){}

  review$!: Observable<Review>;

  ngOnInit(): void {
    this.route.params.subscribe((p)=> {
      const id = p['id'];
      this.review$ = this.reviewsService.getSingleReview(id);
      this.reviewsService.getSingleReview(id).subscribe();
    });

  }

    readingTime(text: string) {
      this.review$.pipe(
        map((review: Review) => text = review.content)
      );
      console.log("Ciao " + text);
      const words = text.split(" ").length;
      const minutes = Math.ceil(words / 3);
      if(minutes < 60) {
        return minutes + " secondi";
      } else {
        const time = Math.ceil((minutes / 60));
        if(time == 1) {
          return "Circa " + time + " minuto."
        } else {
          return "Circa " + time + " minuti."
        }
      }
      return;
    }

}
