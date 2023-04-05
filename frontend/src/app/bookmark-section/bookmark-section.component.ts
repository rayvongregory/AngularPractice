// import { Bookmark } from './../bookmark/bookmark';
import { BookmarkService } from './../bookmark-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-section',
  templateUrl: './bookmark-section.component.html',
  styleUrls: ['./bookmark-section.component.css'],
})
export class BookmarkSectionComponent implements OnInit {
  // @Input('bookmarks') bookmarks!: [];
  bookmarks: any[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  async ngOnInit(): Promise<void> {
    this.bookmarks = await this.bookmarkService.getBookmarks();
    if (this.bookmarks.length > 0) {
      document.getElementById('bookmark-section')?.classList.remove('empty');
    }
  }
}
