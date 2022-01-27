export interface ITodo {
   id?: string;
   title: string;
   assignee: IUser;
   assigned: IUser;
   category: ECategories;
   status: EStatuses;
   description: string;
   dateAdded: string;
   dateCompleted: string;
}

