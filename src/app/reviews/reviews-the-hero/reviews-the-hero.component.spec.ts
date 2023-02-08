import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTheHeroComponent } from './reviews-the-hero.component';

describe('ReviewsTheHeroComponent', () => {
  let component: ReviewsTheHeroComponent;
  let fixture: ComponentFixture<ReviewsTheHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsTheHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsTheHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
