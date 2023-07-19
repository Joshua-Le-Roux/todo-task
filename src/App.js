
import './App.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { newTodo } from './store/todo';
import { useState } from 'react';
import Buttons from "./buttons"

function App() {
  //useState to access the user input and assign it to the state
  const [addTodo, setaddTodo] = useState('')
  //calling dispatch
  const dispatch = useDispatch();

  const submitAdd = (event) => {
    event.preventDefault();
    //dispatching addTodo with newTodo reducer
    dispatch(newTodo(addTodo))
    setaddTodo('')
  };

  //grabbing the todo data to make array to iterate over each item in todo.data
  const todoItems = useSelector((state) => state.todo.data)
  

  return (
    <div className="App">
      <form>
        <label>Add Task<br/>  
        {/* when input field is changed its change is monitored and then set to the useState */}
          <input type='text' value={addTodo} onChange={(e) => setaddTodo(e.target.value)} />
        </label><br/>
        {/* when add is clicked the user input is taken and a new todo is created */}
        <button type='submit' onClick={submitAdd}>add</button>
      </form><hr/>
      <div>
        {/* using Object.entries on previously created todoItems to create an array to iterate and display all tasks with their own buttons */}
        {Object.entries(todoItems).map(([todoId, todo]) => (
            <div key={todoId}>
              Task : {todo.content} <br/> Completed : {todo.completed ? "True" : "False"}
              <Buttons id={todoId} complete={todo.completed} />
              <hr/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
