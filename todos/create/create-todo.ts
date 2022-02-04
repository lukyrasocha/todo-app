import { ITodo } from "../../interfaces/ITodo";
import connection from '../../connection';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export async function createTodo(newTodo): Promise<ITodo> {

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
    dateAdded:moment().format('YYYY-MM-DD HH:mm:ss'),
    dateCompleted: null
  };

  const query = `INSERT INTO Todo(id,status,category,assignee,assigned,title,description,date_added,date_completed) VALUES(\'${todo.id}\',${todo.status},${todo.category},\'${todo.assignee.email}\',\'${todo.assigned.email}\',\'${todo.title}\',\'${todo.description}\',\'${todo.dateAdded}\',${todo.dateCompleted});`

  connection.query(query)
  return Promise.resolve(todo);
}
