import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { getUsers } from "./get-users";

export async function getUsersController(req: Request, res: Response) {
  const users: IUser[] = await getUsers();
  
  res.send(users);
}