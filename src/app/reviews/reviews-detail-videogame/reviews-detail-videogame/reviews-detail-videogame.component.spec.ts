import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsDetailVideogameComponent } from './reviews-detail-videogame.component';

describe('ReviewsDetailVideogameComponent', () => {
  let component: ReviewsDetailVideogameComponent;
  let fixture: ComponentFixture<ReviewsDetailVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsDetailVideogameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsDetailVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
