import { formatDate } from "@angular/common";
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

  text = '';
  readingTimeCalculated = '';
  news!: SingleNews;

  myDate = "26-02-2012";
  myaDate = this.myDate.split("-");
  newDate = new Date( +this.myaDate[2], +this.myaDate[1] -1, +this.myaDate[0]);
  tags: string[] = []

    ngOnInit(): void {
      this.route.params.subscribe((p)=> {
        const id = p['id'];
        this.newsService.getSingleNews(id).subscribe((res) => {
          this.news = res;
          this.tags = [...this.news.tags];
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
        return "Meno di un minuto.";
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

