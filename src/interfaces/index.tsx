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
  password: string;
  occupation: string;
  departament: IDepartaments;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  occupation: string;
  departament: string;
}
