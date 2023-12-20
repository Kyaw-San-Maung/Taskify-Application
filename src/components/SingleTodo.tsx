import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../model";
import "./singleTodo.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodo }: Props) {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)


  const handleDone = (id: number) => {
    setTodo(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodo(todos.filter((todo) => todo.id !== id));
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
        <span className="icon" onClick={() => handleDelete(todo.id)}>
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
