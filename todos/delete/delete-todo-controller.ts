import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodo";
import { deleteTodo } from "./delete-todo";

export async function deleteTodoController(req: Request, res: Response) {
  const deletedTodo = await deleteTodo(req.params.id);

  if (deletedTodo === null) {
    res.status(500).json({ error: "could not find the id" });
  }

  res.status(200).json(`Deleted todo with id ${deletedTodo.id}`);
}
