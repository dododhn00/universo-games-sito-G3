import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: '/reviews',
    component: ReviewsComponent,
  },
  {
    path: '/reviews-detail/:id',
    component: DetailReviewComponent,
  },
  {
    path: '/catalog',
    component: DetailReviewComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
