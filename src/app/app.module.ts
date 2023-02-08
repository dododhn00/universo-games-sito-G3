import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { RelatedNewsComponent } from './news/related-news/related-news.component';
import { NewsContentComponent } from './news/news-content/news-content.component';
import { NewsDetailHeroComponent } from './news/news-detail-hero/news-detail-hero.component';
import { NewsDetailContentComponent } from './news/news-detail-content/news-detail-content.component';
import { NewsDetailRelatedComponent } from './news/news-detail-related/news-detail-related.component';
import { HomeReviewsListComponent } from './reviews/home-reviews-list/home-reviews-list.component';
import { TheHeroReviewsComponent } from './reviews/the-hero-reviews/the-hero-reviews.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { ReviewsTheHeroComponent } from './reviews/reviews-the-hero/reviews-the-hero.component';
import { ReviewsDetailHeroComponent } from './reviews/reviews-detail-hero/reviews-detail-hero.component';
import { ReviewsDetailContentComponent } from './reviews/reviews-detail-content/reviews-detail-content.component';
import { ReviewsHomeListComponent } from './reviews/reviews-home-list/reviews-home-list.component';
import { CatalogCardComponent } from './catalog/catalog-card/catalog-card.component';

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
    RelatedNewsComponent,
    NewsContentComponent,
    NewsDetailHeroComponent,
    NewsDetailContentComponent,
    NewsDetailRelatedComponent,
    HomeReviewsListComponent,
    TheHeroReviewsComponent,
    ReviewsListComponent,
    ReviewsTheHeroComponent,
    ReviewsDetailHeroComponent,
    ReviewsDetailContentComponent,
    ReviewsHomeListComponent,
    CatalogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
