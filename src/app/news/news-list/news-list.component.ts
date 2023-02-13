import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SingleNews } from 'src/app/model/singleNews';
import { __generator } from 'tslib';
import { NewsService } from '../service/news.service';
import { startWith, switchMap } from 'rxjs/operators';
import { merge, of } from 'rxjs';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  news!: SingleNews[];

  otherNews: SingleNews[] = [];

  pageSlice: SingleNews[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.news = data;
      this.news = this.news.sort((a, b) => {
        const dt1 = Date.parse(a.publicationDate);
        const dt2 = Date.parse(b.publicationDate);
        return dt2 - dt1
      });
      for (let i = 4; i < this.news.length; i++) {
        this.otherNews.push(this.news[i]);
      };
      this.pageSlice = this.otherNews.slice(0, 5)
    })

  }


  OnPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.otherNews.length) {
      endIndex = this.otherNews.length;
    }
    this.pageSlice = this.otherNews.slice(startIndex, endIndex);

  }

  /*   onFetchData(){
      this.newsService.getNews().subscribe( response => this.otherNews = response);
    } */

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


  /*   linkListToPaginator() {
      merge(this.paginator.page).pipe(
        startWith({}),
        switchMap(() => {
          return of(this.pageSlice);
        }))
        .subscribe(res => {
          const from = this.paginator.pageIndex * 5;
          const to = from + 5;
          this.pageSlice = res.slice(from, to);
  
        })
    } */

}
