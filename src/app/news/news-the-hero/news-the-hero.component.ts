import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleNews} from 'src/app/model/singleNews';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-the-hero',
  templateUrl: './news-the-hero.component.html',
  styleUrls: ['./news-the-hero.component.css']
})
export class NewsTheHeroComponent implements OnInit{


  news!: SingleNews[];

  heroNews: SingleNews[] = [];

  otherNews: SingleNews[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
      this.news = this.news.sort((a, b) => {
        const dt1 = Date.parse(a.publicationDate);
        const dt2 = Date.parse(b.publicationDate);
        return dt2-dt1
      });
      for(let i=0; i<4; i++)
      {
        this.heroNews.push(this.news[i]);
      };
    });
  }







  
 

}
