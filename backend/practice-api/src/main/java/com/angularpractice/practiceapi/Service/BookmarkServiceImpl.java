package com.angularpractice.practiceapi.Service;

import com.angularpractice.practiceapi.Mongo.Bookmark;
import com.angularpractice.practiceapi.Repo.BookmarkRepo;
import com.angularpractice.practiceapi.Request.BookmarkRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class BookmarkServiceImpl implements BookmarkService {

    @Autowired
    private BookmarkRepo bookmarkRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public ResponseEntity<HashMap<String, Object>> addNewBookmark(BookmarkRequest bookmarkRequest) {
        String bookmarkName = bookmarkRequest.getBookmarkName();
        String bookmarkUrl = bookmarkRequest.getBookmarkUrl();
        String bookmarkColor = bookmarkRequest.getBookmarkColor();
        Bookmark bookmark = new Bookmark();
        bookmark.setBookmarkName(bookmarkName);
        bookmark.setBookmarkUrl(bookmarkUrl);
        bookmark.setBookmarkColor(bookmarkColor);
        bookmarkRepo.save(bookmark);
        return ResponseEntity.status(HttpStatus.CREATED).body(new HashMap<>(){
            {
                put("msg", "New bookmark created");
            }
        });
    }

    @Override
    public ResponseEntity<HashMap<String, Object>> getBookmarks() {
        List<Bookmark> bookmarkList = mongoTemplate.findAll(Bookmark.class);
        return ResponseEntity.status(HttpStatus.OK).body(new HashMap<>(){
            {
                put("msg", "here are the bookmarks");
                put("bookmarks", bookmarkList);
            }
        });
    }
}
