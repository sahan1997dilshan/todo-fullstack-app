package com.example.todo_backend.service;

import com.example.todo_backend.dto.TaskDto;
import com.example.todo_backend.entity.Task;
import com.example.todo_backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {


    private final TaskRepository repository;

    @Autowired
    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task createTask(TaskDto taskDto){
        Task task = new Task();

        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());
        task.setCompleted(taskDto.isCompleted());

        return repository.save(task);
    }

    public List<Task> getLatestTasks(){
        return repository.findTop5ByCompletedFalseOrderByCreatedAtDesc();
    }

    public void markDone(Long id){
        Task task = repository.findById(id).orElseThrow();
        task.setCompleted(true);
        repository.save(task);
    }

}
