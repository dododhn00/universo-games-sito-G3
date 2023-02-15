import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleNews } from 'src/app/model/singleNews';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-detail-related',
  templateUrl: './news-detail-related.component.html',
  styleUrls: ['./news-detail-related.component.css']
})
export class NewsDetailRelatedComponent implements OnInit {

  dataNews!: SingleNews[];
  relatedNews!: SingleNews[];
  singleNews!: SingleNews;

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      const id = p['id'];
      this.newsService.getSingleNews(id).subscribe(data => {
        this.singleNews = data;
        this.newsService.getNews().subscribe(data => {
          this.relatedNews = data
            //filter per togliere l'articolo corrente
            .filter(a => a._id !== id)
            //map per aggiungere il parametro "Score" che indica quanti simili sono gli articoli al corrente
            .map(article => ({ ...article, score: this.similiarityScore(this.singleNews, article) }))
            //sort per ordinare in base al valore di score
            .sort((a, b) => b.score - a.score)
            //slice per pigliare i primi 3 
            .slice(0, 3)
        });

      });
    });
  }



  similiarityScore(current: SingleNews, other: SingleNews): number {
    //jaccard index: 
    const a = new Set(current.tags);
    const b = new Set(other.tags);
    const intersection = new Set(current.tags.filter(n => b.has(n)));
    const unionLenght = a.size + b.size - intersection.size

    return intersection.size / unionLenght;
  }

  navigateToDetail(id:string){
    this.router.navigateByUrl('news-detail/' + id);
  }
}
