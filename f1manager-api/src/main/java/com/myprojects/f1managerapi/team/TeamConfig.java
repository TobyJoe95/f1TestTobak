package com.myprojects.f1managerapi.team;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

import static java.time.Month.JANUARY;

@Configuration
public class TeamConfig {
    @Bean
    CommandLineRunner commandLineRunner(TeamRepository repository){
        return args->{
            Team williams = new Team(
                    "Williams",
                    LocalDate.of(1990, JANUARY,5),
                    4,
                    true
            );
            Team mclaren = new Team(
                    "Mclaren",
                    LocalDate.of(1995, JANUARY,5),
                    5,
                    true
            );
            repository.saveAll(
                    List.of(williams,mclaren)
            );
        };
    }
}
