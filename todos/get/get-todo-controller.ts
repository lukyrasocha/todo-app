import {Request, Response} from "express";
import {getTodo} from "./get-todo";
import {ITodo} from "../../interfaces/ITodo";

export async function getTodoController(req:Request, res:Response) {
    //console.log(req.params)
    const todo: ITodo|null = await getTodo(req.params.id);

    if (todo === null){
       return res.send(`Id ${req.params.id} not found`)
     }

    res.send(todo)
}