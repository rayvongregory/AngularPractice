import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor() {}
  url = 'http://localhost:8080';

  addNewBookmark(
    bookmarkName: string,
    bookmarkUrl: string,
    bookmarkColor: string
  ) {
    axios
      .post(`${this.url}/add-new-bookmark`, {
        bookmarkName,
        bookmarkUrl,
        bookmarkColor,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getBookmarks() {
    let bookmarks: any[] = [];
    await axios
      .get(`${this.url}/get-bookmarks`)
      .then((res) => {
        bookmarks = res.data.bookmarks;
      })
      .catch((err) => {
        console.log(err);
      });
    return bookmarks;
  }
}
