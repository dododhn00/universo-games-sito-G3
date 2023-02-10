import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  apiUrl = "https://project-works-rest-api.onrender.com/api/v1/GROUP-III/review";


  constructor(private http:HttpClient) {
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getSingleReview(id:string): Observable<Review> {
    return this.http.get<Review>(this.apiUrl+'/'+id);
  }
}
