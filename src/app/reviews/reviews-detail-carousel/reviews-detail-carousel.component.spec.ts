import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsDetailCarouselComponent } from './reviews-detail-carousel.component';

describe('ReviewsDetailCarouselComponent', () => {
  let component: ReviewsDetailCarouselComponent;
  let fixture: ComponentFixture<ReviewsDetailCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsDetailCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsDetailCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
