import express from "express";
import {listTodosController} from "../todos/list/list-todos.controller";

const router = express.Router();

router.get('/todos', listTodosController);


export default router;