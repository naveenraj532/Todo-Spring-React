import React from 'react';
import { Routes, Route} from 'react-router-dom';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
    return (
        <Routes>
                <Route path="/list-todos" element={<TodoList/>} />
                <Route path="/add-todo" element={<TodoForm/>} />
                <Route path="/update-todo/:id" element={<TodoForm/>} />
                <Route path="/" element={<TodoList />} />
        </Routes>
    );
};

export default App;
