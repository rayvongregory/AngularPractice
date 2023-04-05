package com.angularpractice.practiceapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class PracticeApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PracticeApiApplication.class, args);
	}

}
