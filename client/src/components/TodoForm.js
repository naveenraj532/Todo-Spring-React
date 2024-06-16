import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './TodoForm.css'; // Import CSS file

const TodoForm = () => {
    const [todo, setTodo] = useState({ userName: '', description: '', targetDate: '', isDone: false });
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchTodo = async () => {
        const response = await axios.get(`http://localhost:8080/api/todos/${id}`);
        setTodo(response.data);
    };

    useEffect(() => {
        if (id) {
            fetchTodo();
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await axios.put(`http://localhost:8080/api/todos/${id}`, todo);
        } else {
            await axios.post('http://localhost:8080/api/todos', todo);
        }
        navigate('/list-todos'); // Use navigate function to redirect
    };

    return (
        <div className="form-container"> {/* Apply form-container class */}
            <h1>{id ? 'Update Todo' : 'Add Todo'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group"> {/* Apply form-group class */}
                    <label>Description</label>
                    <input type="text" name="description" value={todo.description} onChange={handleChange} required />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label>Target Date</label>
                    <input type="date" name="targetDate" value={todo.targetDate} onChange={handleChange} required />
                </div>
                <div className="form-group"> {/* Apply form-group class */}
                    <label>Is Done</label>
                    <input type="checkbox" name="isDone" checked={todo.isDone} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TodoForm;
