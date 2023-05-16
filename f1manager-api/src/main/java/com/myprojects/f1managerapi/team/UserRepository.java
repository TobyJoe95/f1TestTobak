package com.myprojects.f1managerapi.team;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
    public interface UserRepository extends JpaRepository<User, Long> {

        @Query("SELECT u FROM User u WHERE u.name =?1")
        Optional<User> findUserByName(String name);



    }


