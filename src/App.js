
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos=[
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar curso', completed:false},
  {text: 'Llorar con la llorona', completed:false},
  {text: 'Matar a la llorona', completed:true},
]

function App() {
  const [todos, setTodos] =React.useState(defaultTodos);
  const [searchValue, setSearchValue]=React.useState('');

  const completedTodos= todos.filter(todo=>!!todo.completed).length
  const totalTodos=todos.length

  let searchedTodos=[]

  if(!searchValue.length >=1)
  {
    searchedTodos=todos
  }else{
    searchedTodos=todos.filter(todo=>{
      const todoText=todo.text.toLowerCase()
      const searchText=searchValue.toLocaleLowerCase()

      return todoText.includes(searchText)

    })
  }


  const completeTodos =(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text == text)

    todos[todoIndex]={
      text: todos[todoIndex].text,
      completed: true,
    }
  }

  return (
    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />
      <div className="todo-search">
        <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
        <CreateTodoButton/>
      </div>
      <TodoList>
      {searchedTodos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text}
        completed={todo.completed}/>
      ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
