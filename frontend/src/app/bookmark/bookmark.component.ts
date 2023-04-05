import { Component, Input, OnInit } from '@angular/core';
// import { Bookmark } from './bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  @Input('bookmarkName') bookmarkName!: string;
  @Input('bookmarkUrl') bookmarkUrl!: string;
  @Input('bookmarkColor') bookmarkColor!: string;
  @Input('bookmarkId') bookmarkId!: string;
  constructor() {}

  ngOnInit(): void {}
}
