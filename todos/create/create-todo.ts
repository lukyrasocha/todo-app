import { ITodo } from "../../interfaces/ITodo";

export async function createTodo(newTodo): Promise<ITodo> {
  const todo: ITodo = {
    id: Math.floor(4 + Math.random() * 10),
    ...newTodo,
  };
  // here we would insert it to the database
  console.log(todo);
  return Promise.resolve(todo);
}
