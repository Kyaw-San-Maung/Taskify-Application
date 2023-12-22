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

export default function TodoList ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) {
  return (
  
    <div className="container">
      
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
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
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
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
          </div>
        )}
      </Droppable>
      </div>
    
  );
}
