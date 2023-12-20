import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <>
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodo={setTodos}
            />
          </>
        );
      })}
    </div>
  );
}
