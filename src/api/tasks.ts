import api from ".";
import { ITask } from "../components/ModalCreateTask";
import { ITasks } from "../interfaces/index";

export const getTasks = async () => {
  const { data } = await api.get<ITasks[]>("/tasks");

  return data;
};

export const createTask = async (body: ITask) => {
  const { data } = await api.post("/tasks", body);

  return data;
};

export const getTaskById = async (id: string) => {
  const { data } = await api.get(`/tasks/${id}`);

  return data;
};

export const updateTask = async (id: string, body: ITask) => {
  const { data } = await api.put(`/tasks/${id}`, body);

  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await api.delete(`/tasks/${id}`);

  return data;
};
