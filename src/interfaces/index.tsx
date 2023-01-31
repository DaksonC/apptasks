export interface IFormData {
  users: IUsers[];
  tasks: ITasks[];
}

export interface IDepartaments {
  id: number;
  name: string;
}

export interface IImg {
  path: string;
  preview: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
  lastModifiedDate: Date;
}
export interface ITasks {
  id: number;
  title: string;
  description: string;
  updated_at: Date;
  finished: boolean;
}

export interface IUsers {
  id: number | undefined;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  departament: IDepartaments;
  image: IImg;
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
