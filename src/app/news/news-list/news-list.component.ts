import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SingleNews } from 'src/app/model/singleNews';
import { __generator } from 'tslib';
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

  pageSlice = this.otherNews.slice(0,5)

  OnPageChange(event: PageEvent){
    console.log(event);
     const startIndex = event.pageIndex * event.pageSize;
     let endIndex = startIndex + event.pageSize;
     if(endIndex > this.otherNews.length){
      endIndex = this.otherNews.length;
     }
     this.pageSlice = this.otherNews.slice(startIndex, endIndex);

     console.log(this.otherNews);


  }

  onFetchData(){
    this.newsService.getNews().subscribe( response => this.otherNews = response);
  }

  // this.gameService.getVideogames().subscribe((game) => {

  //   this.numberOfGames = game.length;
  //   this.dataSource = new MatTableDataSource(game);
  //   this.videogames = game;

  //   //Imposto un timeout per essere sicuro che tutti i dati siano stati ottenuti,
  //   // altrimenti il paginator verrebbe assegnato undefined.
  //   setTimeout(()=>{
  //     this.dataSource.paginator = this.paginator;
  //   })
  // });

}
