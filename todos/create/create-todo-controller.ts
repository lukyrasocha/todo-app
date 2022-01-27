import {Request,Response} from "express";
import {createTodo} from "./create-todo";
import {ITodo} from "../../interfaces/ITodo";

export async function createTodoController(req:Request, res:Response){
    const newTodo:ITodo = await createTodo(req.body)
    res.status(200).json(newTodo)
}