package com.project.todo.controller;

import com.project.todo.entity.Todo;
import com.project.todo.service.ITodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin("http://localhost:3000/")
public class TodoController {

    @Autowired
    private ITodoService todoService;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @GetMapping("/{id}")
    public Optional<Todo> getTodoById(@PathVariable long id) {
        return todoService.getTodoById(id);
    }

    @PostMapping
    public void addTodo(@RequestBody Todo todo) {
        todoService.saveTodo(todo);
    }

    @PutMapping("/{id}")
    public void updateTodo(@PathVariable long id, @RequestBody Todo todo) {
        todo.setId(id);
        todoService.updateTodo(todo);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable long id) {
        todoService.deleteTodo(id);
    }
}
