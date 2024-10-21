package com.mk.todoapp.controller;

import com.mk.todoapp.entity.CompositeKey;
import com.mk.todoapp.entity.Task;
import com.mk.todoapp.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/tasks")
public class TaskController {

    public final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public Page<Task> getTasksPaged(@RequestParam(defaultValue = "0") int page,
                                    @RequestParam(defaultValue = "10") int size,
                                    @RequestParam(defaultValue = "id") String sortBy){

        return taskService.getAllTasksPaged(page, size, sortBy);

    }

    @GetMapping("/sorted")
    public List<Task> getAllTasksSorted(@RequestParam(defaultValue = "id") String sortBy){
        return taskService.getAllTasksSorted(sortBy);

    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(
            @PathVariable long id,
            @RequestBody Task task) {

        return taskService.updateTask(id, task);
    }


    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable long id) {

        taskService.deleteTask(id);
    }

    @GetMapping("/{id}")
    public Task getTask(@PathVariable long id) {
        return taskService.getTask(id);
    }



}
