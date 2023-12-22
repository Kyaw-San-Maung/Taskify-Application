import React, { StrictMode, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Todo } from "../model";
import "./singleTodo.css";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ index, todo, todos, setTodo }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

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

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    setTodo(
      todos.map((todo) => (todo.id == id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <React.StrictMode>
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided, snapshot) => (
          <form
            className={`todos_single ${snapshot.isDragging? 'drag' : ''}`}
            onSubmit={(e) => handleEdit(e, todo.id)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {edit ? (
              <input
                ref={inputRef}
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="todos_single_text"
              />
            ) : todo.isDone ? (
              <s className="todos_single_text">{todo.todo}</s>
            ) : (
              <span className="todos_single_text">{todo.todo}</span>
            )}

            <div>
              <span
                className="icon"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
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
        )}
      </Draggable>
      </React.StrictMode>
  );
}

export default SingleTodo;
