package com.angularpractice.practiceapi.Mongo;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookmark")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Bookmark {

    @Id
    private String bookmarkId;
    private String bookmarkName;
    private String bookmarkUrl;
    private String bookmarkColor;

}
