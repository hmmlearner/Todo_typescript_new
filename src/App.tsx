import * as React from "react";
import Todo from "./Todolist";
import NewTodo from "./NewTodo";

interface TodoItem {
  id: string;
  description: string;
}

const App: React.FC = () => {
  //const todoList : <TodoItem>[] = [];
  const [todoList, setTodoList] = React.useState<TodoItem[]>([]);

  const NewTodoHandler = (text: string) => {
    console.log(text);
    setTodoList((prevstate) => [
      ...prevstate,
      { id: Math.random().toString(), description: text }
    ]);
  };

  const RemoveTodoHandler = (itemId: string) => {
    setTodoList((prevstate) => {
      return prevstate.filter((i) => i.id != itemId);
    });
  };

  return (
    <div>
      <NewTodo addNewTodo={NewTodoHandler} />
      <Todo todoList={todoList} removeTodo={RemoveTodoHandler} />
    </div>
  );
};

export default App;
