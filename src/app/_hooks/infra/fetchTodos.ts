export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const fetchTodos = async (): Promise<Todo[] | undefined> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const todos: Todo[] = await response.json(); // 型を明示的に指定
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return undefined; // エラーハンドリングのため undefined を返す
  }
};
