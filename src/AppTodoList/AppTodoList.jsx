import { useState, useEffect } from "react";
import './AppTodoList.css';
import Card from "./Components/Card";

const AppTodoList = () => {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    if (input.length < 1) return;
    e.preventDefault();
    addTask(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (input.length < 1) return;
    if (e.key === 'Enter') {
      addTask(input);
      setInput('');
    }
  };

  const addTask = (userInput) => {
    const todoListCopy = [...todoList];
    const newTodoList = [{ id: todoList.length + 1, task: userInput, isCompleted: false }, ...todoListCopy];
    setTodoList(newTodoList);
  };

  const handleDelete = (idTaskClicked) => {
    const todoListCopy = [...todoList];
    const newTodoList = todoListCopy.filter(todo => todo.id != idTaskClicked); //remove the one that is clicked
    setTodoList(newTodoList);
  };


  const handleCheck = (id) => {
    todoList.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setCount(count + 1);
    console.log(todoList);
  };

  useEffect(() => { }, [count]);


  return (
    <div className='container'>
      <div className="title">Todo List</div>
      <div className='user-input'>
        <input
          className='user-input-text'
          value={input}
          onInput={(e) => setInput(e.target.value)}
          placeholder='What do you want to do ?'
          onKeyDown={handleKeyDown}
          autoFocus={true}
        >
        </input>
        <button onClick={handleSubmit} className='user-input-btn'>ADD</button>
      </div>
      {
        todoList && todoList.length != 0 ? todoList.filter(todo => !todo.isCompleted).map((todo, index) => {
          return (
            <Card
              key={index}
              userInput={todo?.task}
              handleDeleteTask={() => handleDelete(todo?.id)}
              handleCheckTask={() => handleCheck(todo?.id)}
              isChecked={todo?.isCompleted}
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
        todoList && todoList.filter(todo => todo.isCompleted).map((todo, index) => {
          return (
            <Card
              key={index}
              userInput={todo?.task}
              handleDeleteTask={() => handleDelete(todo?.id)}
              handleCheckTask={() => handleCheck(todo?.id)}
              isChecked={todo?.isCompleted}
            />
          );
        })
      }
    </div>
  );
};

export default AppTodoList;