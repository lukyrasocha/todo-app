import {Request, Response} from "express";
import {getTodo} from "./get-todo";
import {ITodo} from "../../interfaces/ITodo";

export async function getTodoController(req:Request, res:Response) {

    const todo: ITodo = await getTodo(req.params.id);

    res.send(todo)
}