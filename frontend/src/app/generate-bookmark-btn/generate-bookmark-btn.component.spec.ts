import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBookmarkBtnComponent } from './generate-bookmark-btn.component';

describe('GenerateBookmarkBtnComponent', () => {
  let component: GenerateBookmarkBtnComponent;
  let fixture: ComponentFixture<GenerateBookmarkBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateBookmarkBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBookmarkBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
