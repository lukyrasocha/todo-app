import { ITodo } from "../../interfaces/ITodo";
import connection from '../../connection';
import { v4 as uuidv4 } from 'uuid';
import {mapStatusToInt} from "../../utils/mapStatusToInt";

export async function createTodo(newTodo:ITodo): Promise<ITodo> {

  const statusInt = await mapStatusToInt(newTodo.status);

  const todo: ITodo = {
    id: uuidv4(),
    title: newTodo.title,
    assignee: {
      email: newTodo.assignee.email,
      name: newTodo.assignee.name
    },
    assigned: {
      email: newTodo.assigned.email,
      name: newTodo.assigned.name
    },
    category: newTodo.category,
    status: newTodo.status,
    description: newTodo.description,
    dateAdded:newTodo.dateAdded,
    dateCompleted: null
  };

  const query = `INSERT INTO Todo(id,status,category,assignee,assigned,title,description,date_added,date_completed) VALUES(\'${todo.id}\',${statusInt},${todo.category},\'${todo.assignee.email}\',\'${todo.assigned.email}\',\'${todo.title}\',\'${todo.description}\',\'${todo.dateAdded}\',${todo.dateCompleted});`

  connection.query(query)
  return Promise.resolve(todo);
}
