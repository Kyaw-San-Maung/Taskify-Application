import React, { StrictMode } from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./TodoList.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) {
  return (
    <div className="container">
      <React.StrictMode>
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className="todos_heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodo={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${snapshot.isDraggingOver? "dragcomplete" : ''}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                key={todo.id}
                todos={completedTodos}
                setTodo={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        </React.StrictMode>
    </div>
  );
}
