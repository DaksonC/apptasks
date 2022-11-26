export interface IFormData {
  users: IUsers[];
  tasks: ITasks[];
}

export interface IUsers {
  id: number;
  name: string;
  email: string;
  department: string;
}

export interface ITasks {
  user_id: number;
  title: string;
  description: string;
  created_at: string;
  finished_at: string;
}
