import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset previous error messages
        setNameError('');
        setDescriptionError('');

        // Validate inputs
        if (!name.trim()) {
            setNameError('Please enter a todo name.');
            return;
        }

        if (!description.trim()) {
            setDescriptionError('Please enter a todo description.');
            return;
        }

        // If valid, add todo
        addTodo({ name, description, status: 'not completed' });

        // Clear input fields
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
                    {nameError && <div className="text-danger">{nameError}</div>}
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Todo Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {descriptionError && <div className="text-danger">{descriptionError}</div>}
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
