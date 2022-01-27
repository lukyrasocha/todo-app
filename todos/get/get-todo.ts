import {data} from "../../data";
import {ITodo} from "../../interfaces/ITodo";

export async function getTodo(id): Promise<ITodo>|null{

     for (let obj of data){
        if (obj.id === id){
            return Promise.resolve(obj)
        }
    }
     return null
}