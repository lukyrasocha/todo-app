import express from "express";
import {listTodosController} from "../todos/list/list-todos.controller";
import {getTodoController} from "../todos/get/get-todo-controller";

const router = express.Router();

router.get('/todos', listTodosController);
router.get('/todos/:id', getTodoController);

export default router;