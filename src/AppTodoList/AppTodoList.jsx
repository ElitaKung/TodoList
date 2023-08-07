import { useEffect, useState } from "react";
import './AppTodoList.css';
import Card from "./Components/Card";
// import data from "./Components/data.json"

const AppTodoList = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

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
    setCount(count + 1)
  };

  useEffect(() => {}, [count]);

  return (
    <div className='container'>
      <div className="title">Todo List</div>
      <div className='user-input'>
        <input
          className='user-input-text'
          value={input}
          onInput={(e) => setInput(e.target.value)}
          placeholder='What do you want to do ?'
          autoFocus
          >
        </input>
        <button onClick={handleSubmit} className='user-input-btn'>ADD</button>
      </div>
      {
        todoList && todoList.length != 0 ? todoList.filter(todo => !todo.completed).map((todo, index) => {
          return (
            <Card
              key={index}
              userInput={todo?.task}
              handleDeleteTask={() => handleDelete(todo?.id)}
              handleCheckTask={() => handleCheck(todo?.id)}
              isCompleted={todo?.completed}
            />
          );
        }) : <div className="notask"> - No Tasks - </div>
      }

      {
        (todoList && todoList.length != 0) &&
          <div className="done">
            <div className="done-text">Done</div>
            <div className="done-line"></div>
          </div>
      }


      {
        todoList && todoList.filter(todo => todo.completed).map((todo, index) => {
          return (
            <Card
              key={index}
              userInput={todo?.task}
              handleDeleteTask={() => handleDelete(todo?.id)}
              handleCheckTask={() => handleCheck(todo?.id)}
              isCompleted={todo?.completed}
            />
          );
        })
      }
    </div>
  );
};

export default AppTodoList;