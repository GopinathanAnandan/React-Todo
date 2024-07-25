// TodoList.js
import React, { useState } from 'react';

const TodoList = ({ todos, updateTodoStatus, deleteTodo }) => {
    //Tracks the ID of the todo item being edited (null if no item is being edited).
    const [editingTodoId, setEditingTodoId] = useState(null);
    //Holds the data of the todo item being edited (name and description).
    const [editFormData, setEditFormData] = useState({
        name: '',
        description: '',
    });
    //Invokes updateTodoStatus(id) function when the status button is clicked.
    const handleStatusChange = (id) => {
        updateTodoStatus(id);
    };
    // Invokes deleteTodo(id) function to delete a todo item.
    const handleDelete = (id) => {
        deleteTodo(id);
    };
    // Sets up the form with the current todo item's data for editing.
    const handleEdit = (id) => {
        const todoToEdit = todos.find((todo) => todo.id === id);
        setEditingTodoId(id);
        setEditFormData({
            name: todoToEdit.name,
            description: todoToEdit.description,
        });
    };
    //Updates editFormData as user types into the edit form fields.
    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData,
            [name]: value,
        });
    };
    // Submits the edited todo item data and updates the state after saving.
    const handleEditSubmit = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, name: editFormData.name, description: editFormData.description } : todo
        );
        setEditingTodoId(null);
        setEditFormData({ name: '', description: '' });
    };
    //Cancels the edit mode and resets editingTodoId and editFormData.
    const handleCancelEdit = () => {
        setEditingTodoId(null);
        setEditFormData({ name: '', description: '' });
    };

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {todos.map((todo) => (
                <div key={todo.id} className="col mb-4">
                    <div className="card" style={{ maxWidth: '250px' }}>
                        <div className="card-body">
                            {editingTodoId === todo.id ? (
                                <form onSubmit={(e) => { e.preventDefault(); handleEditSubmit(todo.id); }}>
                                    <div className="mb-3">
                                        <label htmlFor="editName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="editName" name="name" value={editFormData.name} onChange={handleEditInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="editDescription" className="form-label">Description</label>
                                        <textarea className="form-control" id="editDescription" name="description" value={editFormData.description} onChange={handleEditInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-sm btn-primary me-2">Save</button>
                                    <button type="button" className="btn btn-sm btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                                </form>
                            ) : (
                                <>
                                    <h6 className="card-title">Name:{todo.name}</h6>
                                    <h6 className="card-text">Description:{todo.description}</h6>
                                    <h6 className="card-text">
                                        Status: {todo.status}
                                        <button
                                            className="btn btn-sm btn-outline-success ms-2"
                                            onClick={() => handleStatusChange(todo.id)}
                                        >
                                            {todo.status === 'completed' ? 'Mark Not Completed' : 'Mark Completed'}
                                        </button>
                                    </h6>
                                    <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(todo.id)}>Edit</button>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
