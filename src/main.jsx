import React from 'react';
import ReactDOM from 'react-dom/client';
import AppTodoList from './AppTodoList/AppTodoList.jsx';
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppTodoList />
  </React.StrictMode>,
);

