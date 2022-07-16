
import React, {useState} from "react";
import "./App.css"; 
//importing componant
import Form from "./componant/form";
import TodoList from "./componant/todolist";

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h2>Adam's ToDo List</h2>
      </header>
      <Form
        inputText={inputText} //???
        todos={todos} //???
        setTodos={setTodos}
        setInputText={setInputText} />
      <TodoList
        setTodos={setTodos}
        todos={todos} />
    </div>
    
  );
}

export default App;
