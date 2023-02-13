import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SingleNews } from 'src/app/model/singleNews';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-detail-hero',
  templateUrl: './news-detail-hero.component.html',
  styleUrls: ['./news-detail-hero.component.css']
})

export class NewsDetailHeroComponent implements OnInit{

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute){}
  
  news$!: Observable<SingleNews>;
  
    ngOnInit(): void {
      this.route.params.subscribe((p)=> {
        const id = p['id'];
        this.news$ = this.newsService.getSingleNews(id);
      });
      
    }
}
