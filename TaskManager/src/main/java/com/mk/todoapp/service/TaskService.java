package com.mk.todoapp.service;

import com.mk.todoapp.entity.Task;
import com.mk.todoapp.exception.TaskNotFoundException;
import com.mk.todoapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Page<Task> getAllTasksPaged(int page, int size, String sortBy) {

        Pageable pageable = PageRequest.of(page,size, Sort.by(sortBy));
        return taskRepository.findAll(pageable);
    }

    public List<Task> getAllTasksSorted(String sortBy) {
        return (List<Task>) taskRepository.findAll(Sort.by(sortBy));
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(long id, Task task) {
        return taskRepository.findById(id)
                .map(existingTask -> {
                    existingTask.setCompleted(task.isCompleted());
                    return taskRepository.save(existingTask);
                }).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public void deleteTask(long id) {
        if (taskRepository.existsById(id)) {
            taskRepository.deleteById(id);

        }
        else{
            throw new TaskNotFoundException("Task not found");
        }
    }

    public Task getTask(long id) {
        if (taskRepository.existsById(id)) {
            return taskRepository.findById(id).get();
        }
        else{
            throw new TaskNotFoundException("Task not found");
        }
    }



}
