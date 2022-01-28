import { updateTodo } from "./update-todo";
import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodo";

export async function updateTodoController(req: Request, res: Response) {
  const updatedTodo: ITodo | null = await updateTodo(req.body);
  if (updatedTodo === null) {
    res.status(500).json({ error: "data not found" });
  }

  res.status(200).json(updatedTodo);
}
