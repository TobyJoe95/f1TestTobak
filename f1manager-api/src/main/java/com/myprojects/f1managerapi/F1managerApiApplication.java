package com.myprojects.f1managerapi;



import com.myprojects.f1managerapi.team.User;
import com.myprojects.f1managerapi.team.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication


public class F1managerApiApplication {

	public static void main(String[] args) {

		SpringApplication.run(F1managerApiApplication.class, args);

	}

	@Bean
	CommandLineRunner userCommandLineRunner(UserService userservice) {
		return args -> {
			userservice.createUser(new User("admin", "f1test2018"));

		};


	}
}

