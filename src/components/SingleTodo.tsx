import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Todo } from "../model";
import './singleTodo.css'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodo }: Props) {
  return (
    <form className="todos_single">
      <span className="todos_single_text">{todo.todo}</span>
      <div>

        <span className="icon"><FontAwesomeIcon icon={faPenToSquare} /></span>
        <span className="icon"><FontAwesomeIcon icon={faTrash} /></span>
        <span className="icon"><FontAwesomeIcon icon={faCheck} /></span>
        
      </div>
    </form>
  );
}

export default SingleTodo;
