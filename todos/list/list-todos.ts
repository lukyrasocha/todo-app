import {ITodo} from "../../interfaces/ITodo";
import connection from '../../connection';


export async function listTodos(): Promise<ITodo[]>{
    const result:any = await connection.query('SELECT * FROM todo');

    const todos:ITodo[] = [];

    for(const row of result){
        const todo:ITodo = {
            id: row.id,
            title: row.title,
            assignee: row.assignee,
            assigned: row.assigned,
            category: row.category,
            status: row.status,
            description: row.description,
            dateAdded: row.date_added,
            dateCompleted: row.date_completed
        }

        todos.push(todo)
    }

    return Promise.resolve(todos);
}