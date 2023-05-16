package com.myprojects.f1managerapi.team;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String password;

    public User(long id, String name, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public User() {
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
