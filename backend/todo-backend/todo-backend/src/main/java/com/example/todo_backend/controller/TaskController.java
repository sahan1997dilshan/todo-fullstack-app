package com.example.todo_backend.controller;

import com.example.todo_backend.dto.TaskDto;
import com.example.todo_backend.entity.Task;
import com.example.todo_backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {


    private final TaskService service;

    @Autowired
    public TaskController(TaskService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody TaskDto taskDto){
        service.createTask(taskDto);
        return ResponseEntity.ok("Task created");
    }

    @GetMapping
    public List<Task> getTasks(){
        return service.getLatestTasks();
    }

    @PutMapping("/{id}/done")
    public ResponseEntity<String> done(@PathVariable Long id){
        service.markDone(id);
        return ResponseEntity.ok("Task done");
    }

}
