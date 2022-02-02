import {ITodo} from "../../interfaces/ITodo";
import connection from '../../connection';


export async function listTodos(): Promise<ITodo[]>{
    const result:any = await connection.query('\n' +
        'select T.id,T.status,T.title,T.description,T.date_added,T.date_completed,U.email as assignee_email, U.name as assignee_name, U2.email as assigned_email,U2.name as assigned_name \n' +
        'from todo T join user U on T.assignee = U.email join user U2 on T.assigned=U2.email');

    const todos:ITodo[] = [];

    for(const row of result){
        const todo:ITodo = {
            id: row.id,
            title: row.title,
            assignee: {
                email: row.assignee_email,
                name: row.assignee_name
            },
            assigned: {
                email: row.assigned_email,
                name: row.assigned_name
            },
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