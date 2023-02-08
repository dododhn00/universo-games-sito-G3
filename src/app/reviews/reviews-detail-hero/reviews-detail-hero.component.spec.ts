import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsDetailHeroComponent } from './reviews-detail-hero.component';

describe('ReviewsDetailHeroComponent', () => {
  let component: ReviewsDetailHeroComponent;
  let fixture: ComponentFixture<ReviewsDetailHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsDetailHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsDetailHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
