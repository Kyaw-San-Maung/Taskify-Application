import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import './TodoList.css'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <div className="container">
            <div className="todos">
              <span className="todos_heading">Active Tasks</span>
              {
                todos.map((todo) => (
                  <SingleTodo
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodo={setTodos}
                />
                ))
              }
            </div>
            <div className="todos remove">
            <span className="todos_heading">Completed Tasks</span>
              {
                todos.map((todo) => (
                  <SingleTodo
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodo={setTodos}
                />
                ))
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}
