import { updateTodo } from "./update-todo";
import { Request, Response } from "express";
import { ITodo } from "../../interfaces/ITodo";

export async function updateTodoController(req: Request, res: Response) {
  const updatedID: String = await updateTodo(req.body);

  res
    .status(200)
    .json({ success: `Todo with id ${updatedID} successfully updated` });
}
