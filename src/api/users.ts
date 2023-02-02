import api from ".";
import { ILogin, IUsers } from "../interfaces";

export const createUser = async (bady: IUsers) => {
  const { data } = await api.post("/users", bady);

  return data;
};

export const login = async (bady: ILogin) => {
  const { data } = await api.post("/login", bady);

  return data;
};

export const getUsers = async () => {
  const { data } = await api.get<IUsers[]>("/users");

  return data;
};

export const getUserById = async (id: string) => {
  const { data } = await api.get(`/users/${id}`);

  return data;
};

export const updateUser = async (id: string, body: IUsers) => {
  const { data } = await api.put(`/users/${id}`, body);

  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await api.delete(`/users/${id}`);

  return data;
};
