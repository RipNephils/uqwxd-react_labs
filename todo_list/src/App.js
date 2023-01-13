import React from "react";
import "./App.css";

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newTodo = {
      key: new Date().getTime,
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };

    if (newTodo.text.length > 0) {
      setTodoList([...todoList].concat(newTodo));
      setTodo("");
      event.target.vale = "";
    } else {
      alert("Invalid task. Add a task with at least 1 character");
      setTodo("");
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          align="right"
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
