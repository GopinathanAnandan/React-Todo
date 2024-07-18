
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        addTodo({ name, description, status: 'not completed' });
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="row g-3">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Todo Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Todo Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">
                        Add Todo
                    </button>
                </div>
            </div>
        </form>
    );
};

export default TodoForm;

