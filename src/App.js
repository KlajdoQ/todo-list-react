import React, {useState} from 'react';
import Header from './components/Header'
import ToDoForm from './components/ToDoForm'
import TodoList from './components/TodoList'


function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState([])
  
  return (
    <div className="App">
      <Header />
      <ToDoForm todo={todo} setTodo={setTodo} setList={setList}/>
      <TodoList todo={todo} setTodo={setTodo} list={list} setList={setList} />
    </div>
  );
}

export default App;
