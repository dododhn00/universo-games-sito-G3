import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SingleNews } from 'src/app/model/singleNews';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-detail-content',
  templateUrl: './news-detail-content.component.html',
  styleUrls: ['./news-detail-content.component.css']
})
export class NewsDetailContentComponent implements OnInit{

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute){}
  
  news$!: Observable<SingleNews>;
  
  myDate = "26-02-2012";
  myaDate = this.myDate.split("-");
  newDate = new Date( +this.myaDate[2], +this.myaDate[1] -1, +this.myaDate[0]);
  
    ngOnInit(): void {
      this.route.params.subscribe((p)=> {
        const id = p['id'];
        this.news$ = this.newsService.getSingleNews(id);
      });

      console.log('dataa:', this.newDate.toLocaleDateString());
    }
}

