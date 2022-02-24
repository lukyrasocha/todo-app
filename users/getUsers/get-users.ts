import {IUser} from "../../interfaces/IUser";
import connection from '../../connection';


export async function getUsers(): Promise<IUser[]>{
    const result:any = await connection.query('select * from User;')
    const users:IUser[] = [];

    for(const row of result){
        const user:IUser = {
            name: row.name,
            email: row.email
        }

        users.push(user)
    }

    return Promise.resolve(users);
}