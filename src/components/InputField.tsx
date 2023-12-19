import React from "react";
import "./InputFiled.css";

interface props {
  todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => {};
}

function InputField({ todo, setTodo, handleAdd }: props) {
  return (
    <form action="" className="input" onSubmit={handleAdd}>
          <input type="input" value={todo} onChange={
              (e) => setTodo(e.target.value)
      } placeholder="Enter a task" className="input_box" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
}

export default InputField;
