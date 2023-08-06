import { useState } from "react";
import './AppTodoList.css';
import Card from "./Components/Card";
// import data from "./Components/data.json"

const AppTodoList = () => {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      task: "test",
      completed: false
    }
  ]);


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  const addTask = (userInput) => {
    const todoListCopy = [...todoList];
    const newTodoList = [...todoListCopy, { id: todoList.length + 1, task: userInput, completed: false }];
    setTodoList(newTodoList);
  };

  const handleDelete = (id) => {
    const todoListCopy = [...todoList];
    const newTodoList = todoListCopy.filter(todo => todo.id != id)
    setTodoList(newTodoList)
  }

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
        <button onClick={handleSubmit} className='user-input-btn'>ADD</button>
      </div>
      {todoList.map((todo, index) => {
        return (
          <Card 
            key={index} 
            userInput={todo.task} 
            completed={todo.completed} 
            handleDeleteTask={() => handleDelete(todo.id)}
          />
        );
      })}

      <div className='done'>Done ! --------------------</div>

    </div>
  );
};

export default AppTodoList;