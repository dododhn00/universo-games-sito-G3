import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailRelatedComponent } from './news-detail-related.component';

describe('NewsDetailRelatedComponent', () => {
  let component: NewsDetailRelatedComponent;
  let fixture: ComponentFixture<NewsDetailRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetailRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
