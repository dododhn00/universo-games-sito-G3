import { Component, OnInit } from '@angular/core';
import { SingleNews } from 'src/app/model/singleNews';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit{

  news!: SingleNews[];

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
      for(let i=4; i<this.news.length; i++)
      {
        this.otherNews.push(this.news[i]);
      };
    })
  }    
}
