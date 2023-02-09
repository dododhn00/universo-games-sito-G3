import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleNews } from 'src/app/model/singleNews';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-the-hero',
  templateUrl: './news-the-hero.component.html',
  styleUrls: ['./news-the-hero.component.css']
})
export class NewsTheHeroComponent implements OnInit{

  heroNews$!: Observable<SingleNews[]>

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.heroNews$ = this.newsService.getNews();
  }
}
