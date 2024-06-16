import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './TodoList.css'; // Import CSS file

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:8080/api/todos');
        setTodos(response.data);
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:8080/api/todos/${id}`);
        fetchTodos();
    };

    return (
        <div className="todo-container"> {/* Apply todo-container class */}
            <h1>Todo List</h1>
            <div className="add-link"> {/* Apply add-link class */}
                <Link to="/add-todo">Add Todo</Link>
            </div>
            <ul className="todo-list"> {/* Apply todo-list class */}
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item"> {/* Apply todo-item class */}
                        <div className="todo-info"> {/* Apply todo-info class */}
                            <div>
                                <span>{todo.description}</span> - <span>{todo.targetDate}</span>
                            </div>
                            <div className="todo-actions"> {/* Apply todo-actions class */}
                                <Link to={`/update-todo/${todo.id}`}>Edit</Link>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
