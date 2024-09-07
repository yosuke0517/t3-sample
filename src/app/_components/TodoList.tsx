import { fetchTodos, type Todo } from "~/app/hooks/fetchTodos";

const TodoList = async () => {
  const todos = await fetchTodos();

  if (!todos) {
    return <p>Failed to load todos</p>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
