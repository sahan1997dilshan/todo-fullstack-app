package com.example.todo_backend.service;

import com.example.todo_backend.dto.TaskDto;
import com.example.todo_backend.entity.Task;
import com.example.todo_backend.repository.TaskRepository;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class TaskServiceTest {
    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    public TaskServiceTest(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateTask(){
        TaskDto taskDto = new TaskDto();
        taskDto.setTitle("test title");
        taskDto.setDescription("test description");

        Task task = new Task();
        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());

        when(taskRepository.save(any(Task.class))).thenReturn(task);

        Task savedTask = taskService.createTask(taskDto);

        assertEquals("test title", savedTask.getTitle());

        verify(taskRepository, times(1)).save(any(Task.class));
    }
}
