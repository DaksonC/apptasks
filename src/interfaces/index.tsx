export interface IFormData {
  users: IUsers[];
  tasks: ITasks[];
}

export interface IDepartaments {
  id: number;
  name: string;
}

export interface ITasks {
  id: number;
  title: string;
  description: string;
  finished: boolean;
}
export interface IUsers {
  id: number | undefined;
  name: string;
  email: string;
  occupation: string;
  departament: IDepartaments;
}
