import express from "express";
import {listTodosController} from "../todos/list/list-todos.controller";
import {getTodoController} from "../todos/get/get-todo-controller";
import {createTodoController} from "../todos/create/create-todo-controller";
import {updateTodoController} from "../todos/update/update-todo-controller";
import {deleteTodoController} from "../todos/delete/delete-todo-controller";
import { getUsersController } from "../users/getUsers/get-users-controller"; 
const router = express.Router();

router.get('/todos', listTodosController);
router.get('/todos/:id', getTodoController);
router.get('/users', getUsersController);
router.post('/todos', createTodoController);
router.put('/todos', updateTodoController);
router.delete('/todos/:id', deleteTodoController);

export default router;