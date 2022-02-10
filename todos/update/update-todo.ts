import { ITodo } from "../../interfaces/ITodo";
import connection from "../../connection";
import { mapStatusToInt } from "../../utils/mapStatusToInt";

export async function updateTodo(todo: ITodo): Promise<String> | null {
  const statusInt = await mapStatusToInt(todo.status);
  const query = `UPDATE todo T SET 
                 T.title = \'${todo.title}\',
                 T.status =  \'${statusInt}\',
                 T.category = \'${todo.category}\',
                 T.assignee = \'${todo.assignee.email}\',
                 T.assigned = \'${todo.assigned.email}\',
                 T.description = \'${todo.description}\',
                 T.date_added = \'${todo.dateAdded}\',
                 T.date_completed = \'${todo.dateCompleted}\'
                 WHERE T.id = \'${todo.id}\'`;

  await connection.query(query);

  return todo.id;
}
