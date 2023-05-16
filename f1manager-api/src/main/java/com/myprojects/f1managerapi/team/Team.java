package com.myprojects.f1managerapi.team;

import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table(name="teams")
public class Team {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private LocalDate founded;
    private int numberOfWc;
    boolean paid;

    public Team() {
    }

    public Team(long id, String name, LocalDate founded, int numberOfWc, boolean paid) {
        this.id = id;
        this.name = name;
        this.founded = founded;
        this.numberOfWc = numberOfWc;
        this.paid = paid;
    }

    public Team(String name, LocalDate founded, int numberOfWc, boolean paid) {
        this.name = name;
        this.founded = founded;
        this.numberOfWc = numberOfWc;
        this.paid = paid;
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

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getFounded() {
        return founded;
    }

    public void setFounded(LocalDate founded) {
        this.founded = founded;
    }

    public int getNumberOfWc() {
        return numberOfWc;
    }

    public void setNumberOfWc(int numberOfWc) {
        this.numberOfWc = numberOfWc;
    }

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    @Override
    public String toString() {
        return  "Team{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", founded=" + founded +
                ", numberOfWc=" + numberOfWc +
                ", paid=" + paid +
                '}';
    }
}
