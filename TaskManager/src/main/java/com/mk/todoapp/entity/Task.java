package com.mk.todoapp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "task")
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "taskName")
    private String taskName;

    @Column(name = "description")
    private String description;

    @Column(name = "completed")
    private boolean completed;



}
