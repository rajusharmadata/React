import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // npm package to generate unique IDs

export default function Todo() {
  // State to store the list of tasks
  let [Todos, setTodos] = useState([{ task: "Simple Task", id: uuidv4() }]);

  // State to store the new task input value
  let [newTodo, setNewTodo] = useState("");

  // Function to update newTodo state when the input field changes
  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };

  // Function to add a new task to the Todos array when the "Add" button is clicked
  let AddTask = (event) => {
    setTodos((prevTask) => {
      return [...prevTask, { task: newTodo, id: uuidv4() }];
    });

    // Clear the input field after adding a task
    setNewTodo("");
  };
  // deletTask on the task Array 
  let deleteTodo = (id) => {
    setTodos(Todos.filter((Todos)=> (Todos.id != id)));
    
  };

  // change in all Array  
  let Touppercase = ()=>{
    setTodos (Todos.map((todo)=>{
      return{
        ...todo,
        task:todo.task.toUpperCase(),
      }
    })
    
  )
  }


  return (
    <div className="bg-amber-50 text-2xl text-black items-center absolute top-4 left-250">
      <h1 className="text-center text-2xl">Todo App</h1>

      {/* Input field to enter a new task */}
      <input
        className="p-2  bg-amber-50 border-4 "
        type="text"
        placeholder="Write a task"
        value={newTodo}
        onChange={updateTodo} // Calls updateTodo whenever the input value changes
      />

      {/* Button to add a new task */}
      <button onClick={AddTask} className="bg-black text-amber-50 border-2 p-1.5 rounded-b-sm">Add</button>

      <h4>Tasks</h4>
      <ul>
        {Todos.map((Todo) => (
          <li className="" key={Todo.id}>
            <span>{Todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            
            <button onClick={()=>deleteTodo(Todo.id)}>Delete</button>
          </li>

        ))}

      </ul>
      <br />
      <button onClick={Touppercase}>ToupperCase</button>
    </div>
  );
};
