import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTheHeroComponent } from './news-the-hero.component';

describe('NewsTheHeroComponent', () => {
  let component: NewsTheHeroComponent;
  let fixture: ComponentFixture<NewsTheHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTheHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTheHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
