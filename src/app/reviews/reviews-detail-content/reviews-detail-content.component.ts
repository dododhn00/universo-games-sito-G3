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
  text = '';
  readingTimeCalculated = '';
  review ?: Review;

  ngOnInit(): void {
    this.route.params.subscribe((p)=> {
      const id = p['id'];
      this.reviewsService.getSingleReview(id).subscribe((res) => {
        this.review = res;
        this.text = res.content;
        this.readingTimeCalculated = this.readingTime();
      })

    });

  }

    readingTime() {
      this.text = this.text;
      const words = this.text.split(" ").length;
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
      return '';
    }

}
