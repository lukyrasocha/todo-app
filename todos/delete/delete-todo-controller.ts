import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodo";
import { deleteTodo } from "./delete-todo";

export async function deleteTodoController(req: Request, res: Response) {
  const deletedID = await deleteTodo(req.params.id);

  return res.status(200).json(`Deleted todo with id ${deletedID}`);
}
