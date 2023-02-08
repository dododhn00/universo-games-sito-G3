import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsDetailContentComponent } from './reviews-detail-content.component';

describe('ReviewsDetailContentComponent', () => {
  let component: ReviewsDetailContentComponent;
  let fixture: ComponentFixture<ReviewsDetailContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsDetailContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsDetailContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
