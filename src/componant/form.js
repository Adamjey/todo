import react from "react";
import App from "../App";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
 //HERE I CAN WRITE JAVASCRIPT CODE AND FUNCTION
    //inputTextHandler FUCTION HUNDLES THE INPUT ONCHANGE you need to limk to the input{}.
    const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    };
     //submitTodoHundler FUCTION HUNDLES THE BUTTON ONCHANGE you need to limk to the button{}.
  const submitTodoHundler = (e) => {
    e.preventDefault();// it wont retun to default or remove your input text
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random () * 1000},
    ]);
      setInputText(""); //IT WILL SET EMPTY STRING
  };
    return (
      //HERE YOU WRITE JSX CODE
    <form>
          <input
              value ={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input" />
            <button
                onClick={submitTodoHundler}
                className="todo-butten"
                type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
                <select
                    name="todos"
                    className="filter-todo">
          <option value="all"> All</option>
          <option value="complete">complete</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
