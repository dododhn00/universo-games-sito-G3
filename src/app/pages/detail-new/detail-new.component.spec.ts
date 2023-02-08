import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNewComponent } from './detail-new.component';

describe('DetailNewComponent', () => {
  let component: DetailNewComponent;
  let fixture: ComponentFixture<DetailNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
