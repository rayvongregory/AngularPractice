import { BookmarkService } from './../bookmark-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newBookmark: FormGroup = new FormGroup({
    bookmarkName: new FormControl(''),
    bookmarkUrl: new FormControl(''),
    bookmarkColor: new FormControl(''),
  });

  get bookmarkName() {
    return this.newBookmark.get('bookmarkName')?.value.trim();
  }

  get bookmarkUrl() {
    return this.newBookmark.get('bookmarkUrl')?.value.trim();
  }

  get bookmarkColor() {
    return this.newBookmark.get('bookmarkColor')?.value.trim();
  }

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    // this.newBookmark.valueChanges.subscribe((newVal) => console.log(newVal));
  }

  createBookmark() {
    this.bookmarkService.addNewBookmark(
      this.bookmarkName,
      this.bookmarkUrl,
      this.bookmarkColor
    );
  }
}
