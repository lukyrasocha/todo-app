import {data} from "../../data";
import {ITodo} from "../../interfaces/ITodo";
export async function listTodos(): Promise<ITodo[]>{
    return Promise.resolve(data);
}