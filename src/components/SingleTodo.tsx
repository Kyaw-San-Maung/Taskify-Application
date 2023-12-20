import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../model";
import "./singleTodo.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodo }: Props) {
  const handleDone = (id: number) => {
    setTodo(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos_single">
      {todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todos_single_text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faTrash} />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
