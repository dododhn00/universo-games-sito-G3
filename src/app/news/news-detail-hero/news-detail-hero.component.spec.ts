import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailHeroComponent } from './news-detail-hero.component';

describe('NewsDetailHeroComponent', () => {
  let component: NewsDetailHeroComponent;
  let fixture: ComponentFixture<NewsDetailHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetailHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
