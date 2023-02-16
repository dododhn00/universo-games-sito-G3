import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DetailNewComponent } from './pages/detail-new/detail-new.component';
import { DetailReviewComponent } from './pages/detail-review/detail-review.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news-detail/:id',
    component: DetailNewComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'reviews-detail/:id',
    component: DetailReviewComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
