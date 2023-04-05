package com.angularpractice.practiceapi.Service;

import com.angularpractice.practiceapi.Request.BookmarkRequest;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;

public interface BookmarkService {
    ResponseEntity<HashMap<String, Object>> addNewBookmark(BookmarkRequest bookmarkRequest);
    ResponseEntity<HashMap<String, Object>> getBookmarks();

}
