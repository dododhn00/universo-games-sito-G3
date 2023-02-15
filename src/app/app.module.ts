import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailReviewComponent } from './pages/detail-review/detail-review.component';
import { DetailNewComponent } from './pages/detail-new/detail-new.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsTheHeroComponent } from './news/news-the-hero/news-the-hero.component';
import { NewsDetailHeroComponent } from './news/news-detail-hero/news-detail-hero.component';
import { NewsDetailContentComponent } from './news/news-detail-content/news-detail-content.component';
import { NewsDetailRelatedComponent } from './news/news-detail-related/news-detail-related.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewsTheHeroComponent } from './reviews/reviews-the-hero/reviews-the-hero.component';
import { ReviewsDetailHeroComponent } from './reviews/reviews-detail-hero/reviews-detail-hero.component';
import { ReviewsDetailContentComponent } from './reviews/reviews-detail-content/reviews-detail-content.component';
import { ReviewsHomeListComponent } from './reviews/reviews-home-list/reviews-home-list.component';
import { CatalogCardComponent } from './catalog/catalog-card/catalog-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SearchPipe } from './search.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatChipsModule} from "@angular/material/chips";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReviewsComponent,
    CatalogComponent,
    DetailReviewComponent,
    DetailNewComponent,
    NewsListComponent,
    NewsTheHeroComponent,
    NewsDetailHeroComponent,
    NewsDetailContentComponent,
    NewsDetailRelatedComponent,
    ReviewsListComponent,
    ReviewsTheHeroComponent,
    ReviewsDetailHeroComponent,
    ReviewsDetailContentComponent,
    ReviewsHomeListComponent,
    CatalogCardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
