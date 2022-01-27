import express from "express";
import {listTodosController} from "../todos/list/list-todos.controller";
import {getTodoController} from "../todos/get/get-todo-controller";
import {createTodoController} from "../todos/create/create-todo-controller";
import {updateTodoController} from "../todos/update/update-todo-controller";

const router = express.Router();

router.get('/todos', listTodosController);
router.get('/todos/:id', getTodoController);
router.post('/todos', createTodoController);
router.put('/todos/:id', updateTodoController);

export default router;