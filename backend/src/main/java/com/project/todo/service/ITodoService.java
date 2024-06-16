package com.project.todo.service;

import com.project.todo.entity.Todo;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ITodoService {

    List<Todo> getAllTodos();

    List<Todo> getTodosByUser(String user);

    Optional<Todo> getTodoById(long id);

    void updateTodo(Todo todo);

    void addTodo(String name, String desc, Date targetDate, boolean isDone);

    void deleteTodo(long id);

    void saveTodo(Todo todo);
}
