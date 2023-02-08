import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsHomeListComponent } from './reviews-home-list.component';

describe('ReviewsHomeListComponent', () => {
  let component: ReviewsHomeListComponent;
  let fixture: ComponentFixture<ReviewsHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsHomeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
