import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CatalogService } from 'src/app/catalog/service/catalog.service';
import { SingleNews } from 'src/app/model/singleNews';
import { NewsService } from 'src/app/news/service/news.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  data!: SingleNews[]

  searchText = '';

  form: FormGroup = new FormGroup({
    keyword: new FormControl(null, [
    Validators.required
    ])
  }); 

  constructor(private newsService: NewsService, catalogService:CatalogService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => this.data = data);
  }
}
