package com.angularpractice.practiceapi.Repo;

import com.angularpractice.practiceapi.Mongo.Bookmark;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookmarkRepo extends MongoRepository<Bookmark, Integer> {

}
