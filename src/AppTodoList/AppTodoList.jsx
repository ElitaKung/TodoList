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
    },
    {
      id: 1,
      task: "test II",
      completed: true
    }
  ]);
  console.log(todoList);

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

  const handleDelete = (idTaskClicked) => {
    const todoListCopy = [...todoList];
    const newTodoList = todoListCopy.filter(todo => todo.id != idTaskClicked);
    setTodoList(newTodoList);
  };

  const handleCheck = (idTaskClicked) => {
    const todoListCopy = [...todoList];
    todoListCopy.map(todo => {
      if (todo.id === idTaskClicked) {
        todo.completed = !todo.completed;
      }
    });
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
        <button onClick={handleSubmit} className='user-input-btn'>ADD</button>
      </div>
      {
        todoList.length != 0 ? todoList.map((todo, index) => {
          return (
            <Card
              key={index}
              userInput={todo?.task}
              handleDeleteTask={() => handleDelete(todo?.id)}
              handleCheckTask={() => handleCheck(todo?.id)} 
            />
          );
        }) : <div className="notask"> - no tasks - </div>
      }
    </div>
  );
};

export default AppTodoList;