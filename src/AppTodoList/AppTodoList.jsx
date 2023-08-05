import { useState } from "react";
import './AppTodoList.css';
import Card from "./Components/Card";

const AppTodoList = () => {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);


  const handleUserInput = () => {
    if (input.length === 0) return

    const todoListCopy = todoList;
    setTodoList([input, ...todoListCopy]);
    setInput('')
  };

  return (
    <div className='container'>
      <div className="title">Todo List</div>
      <div className='user-input'>
        <input
          className='user-input-text'
          value={input}
          onInput={(e) => setInput(e.target.value)}
          placeholder='What do you want to do ?'>
        </input>
        <button onClick={handleUserInput} className='user-input-btn'>ADD</button>
      </div>

      {
        todoList.length != 0 ? todoList.map((todo, index) => {
          return <Card key={index} userInput={todo} isChecked={false} />
        })
        : "No task"

      }

      <div className='done'>Done ! --------------------</div>

    </div>
  );
};

export default AppTodoList;
