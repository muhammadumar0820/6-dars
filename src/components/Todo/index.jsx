import { useEffect, useState } from "react";
import Header from "../Header";
import Form from "../Form";
import TodoItem from "../TodoItem";
import { getData } from "../../utils/function";
import "./index.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(getData());
  }, []);

  function handleDelete (id){
    let  todosDel = getData();
    todosDel = todos.filter(todo => {
        return todo.id != id;
    })
    setTodos(todosDel);
    localStorage.setItem('todos', JSON.stringify(todosDel));
  }

  return (
    <div className="todo-wrapper">
      <Header />
      <div className="form-todo-wrapper">
        <Form changeState = {setTodos} />
        {todos.map((todo, index) => {
          return (
            <TodoItem deleteTodo = {handleDelete} index={index + 1} key={index} data={todo}></TodoItem>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
