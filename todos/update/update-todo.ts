import {ITodo} from "../../interfaces/ITodo";
import {data} from "../../data";

export async function updateTodo(todo:ITodo): Promise<ITodo>|null{
    // update the id if present
    for (let obj of data){
        if(obj.id === todo.id){
            obj = todo;
            obj.updated = true;
            return Promise.resolve(obj)
        }

    }
    // ID was not found
    return null

}