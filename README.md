# React Todo Task:

In this task, I created the simple Todo application using React. In this task, the todos created in the todo forms are displayed on cards. Each card contains a name, description, status (completed or not completed), a button to change the status, an edit button to edit the particular card, and a delete button to delete the card. This card is viewed by filtering the status, like (all, completed, and not completed).

# Components:

<ul>
  <li>TodoForm</li>
  <li>FilterTodos</li>
  <li>TodoList</li>
</ul>

# App.jsx:

 ### Functions:

<ol>
  <li>addTodo(todo):</li>
  <ul>
    <li>Adds a new todo to both `todos` and `filteredTodos`.</li>
    <li>`todo` is an object containing the todo details with a unique id.</li>
    <li>Uses `setNextId` to generate a unique id.</li>
  </ul>
  <li>updateTodoStatus(id):</li>
  <ul>
    <li>Changes a task's status from "completed" to "not completed," and vice versa.</li>
    <li>Updates both `todos` and `filteredTodos` to reflect the change.</li>
  </ul>
  <li>deleteTodo(id):</li>
  <ul>
    <li>Deletes a todo based on its `id`.</li>
    <li>Updates both `todos` and `filteredTodos` after deletion.</li>
  </ul>
  <li>handleFilterChange(filter):</li>
  <ul>
    <li>Updates `filteredTodos` based on the selected filter.</li>
    <li>Filters `todos` based on their status property:</li>
    <ul>
      <li>'completed': Filters todos where status is 'completed'.</li>
      <li>'not completed': Filters todos where status is 'not completed'.</li>
      <li>Default: Shows all todos.</li>
    </ul>     
  </ul>
</ol>

# TodoForm.jsx:

<ul>
  <li>Props `addTodo`: A function passed down from the parent component (App.jsx) responsible for adding a new todo to the list. This function receives an object containing name, description, and initializes status as 'not completed'.</li>
  <li>The form contains two input fields for todo name and description.</li>
  <li>Each input field is controlled by its corresponding state (name and description) with onChange handlers (setName and setDescription).</li>
  <li>Each input field is also validated. If the input is empty after trimming whitespace, an error message is displayed (nameError or descriptionError).</li>
  <li>The "Add Todo" button triggers the handleSubmit function when clicked.</li>
</ul>

### handleSubmit Function:

<ul>
  <li>This function is triggered when the form is submitted.</li>
  <li>It prevents the default form submission behavior (e.preventDefault()).</li>
  <li>Resets any previous error messages (setNameError('Please enter a todo name') and setDescriptionError('Please enter a todo description.')).</li>
</ul>

# FilterTodos.jsx:

<ul>
  <li>Props handleFilterChange: This function is passed down from the parent component. It's responsible for updating the list of filtered todos based on the user's selection in the dropdown.</li>
  <li>The onChange event is attached to the <select> element, which triggers handleFilterChange when the user selects a different option.</li>
 <ul>
   <li>"All": Displays all todos.</li>
   <li>"Completed": Displays only completed todos.</li>
   <li>"Not Completed": Displays only todos that are not completed.</li>
 </ul>
</ul>

# TodoList.jsx:





































































































































