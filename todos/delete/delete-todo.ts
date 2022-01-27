import {ITodo} from "../../interfaces/ITodo";
import {data} from "../../data";

export async function deleteTodo(id): Promise<ITodo>|null{

    for(let obj of data){
        if(obj.id === id){
            //here we would find it and delete it from the database
            return Promise.resolve(obj)
        }

    }

    return null


}


