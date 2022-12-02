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
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}
