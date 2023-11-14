import * as React from "react";
import "./NewTodo.css";
interface NewTodoProps {
  addNewTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const todoRef = React.useRef<HTMLInputElement>(null);
  const newTodoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.addNewTodo(todoRef.current!.value);
  };

  return (
    <form onSubmit={newTodoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="newTodo"></label>
        <input type="text" id="newTodo" ref={todoRef}></input>
        <button>submit</button>
      </div>
    </form>
  );
};
export default NewTodo;
