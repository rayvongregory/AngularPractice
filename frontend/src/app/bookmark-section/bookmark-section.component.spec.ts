import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkSectionComponent } from './bookmark-section.component';

describe('BookmarkSectionComponent', () => {
  let component: BookmarkSectionComponent;
  let fixture: ComponentFixture<BookmarkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
