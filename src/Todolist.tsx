import * as React from "react";
import "./TodoList.css";
interface TodoListProps {
  todoList: { id: string; description: string }[];
  removeTodo: (itemId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todoList.map((item) => (
        <li key={item.id}>
          <span>{item.description}</span>
          <button onClick={props.removeTodo.bind(null, item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
