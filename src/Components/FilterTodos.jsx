// FilterTodos.js
import React from 'react';

const FilterTodos = ({ handleFilterChange }) => {
    return (
        <div className="row mb-3 border-top">
            <div className="col  mt-3">
                <h5>My Todos</h5>
            </div>
            <div className="col-auto  mt-3">
                <select className="form-select" onChange={(e) => handleFilterChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="not completed">Not Completed</option>
                </select>
            </div>
        </div>
    );
};

export default FilterTodos;
