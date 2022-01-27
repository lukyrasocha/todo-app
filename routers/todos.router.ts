import express from "express";
import {listTodosController} from "../todos/list/list-todos.controller";
import {getTodoController} from "../todos/get/get-todo-controller";
import {createTodoController} from "../todos/create/create-todo-controller";

const router = express.Router();

router.get('/todos', listTodosController);
router.get('/todos/:id', getTodoController);
router.post('/todos', createTodoController);


export default router;