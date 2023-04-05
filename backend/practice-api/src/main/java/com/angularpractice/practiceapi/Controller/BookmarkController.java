package com.angularpractice.practiceapi.Controller;

import com.angularpractice.practiceapi.Request.BookmarkRequest;
import com.angularpractice.practiceapi.Service.BookmarkService;
import com.angularpractice.practiceapi.Service.BookmarkServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class BookmarkController {

    @Autowired
    private BookmarkService bookmarkService;

    @PostMapping("/add-new-bookmark")
    private ResponseEntity<HashMap<String, Object>> addNewBookmark(@RequestBody BookmarkRequest bookmarkRequest) {
        return bookmarkService.addNewBookmark(bookmarkRequest);
    }

    @GetMapping("/get-bookmarks")
    private ResponseEntity<HashMap<String, Object>> getBookmarks() {
        return bookmarkService.getBookmarks();
    }
}
