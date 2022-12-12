import api from ".";
import { IDepartaments } from "../interfaces";

export const getDepartaments = async () => {
  const { data } = await api.get<IDepartaments[]>("/departaments");

  return data;
};

export const createDepartament = async (body: IDepartaments) => {
  const { data } = await api.post("/departaments", body);

  return data;
};

export const getDepartamentById = async (id: string) => {
  const { data } = await api.get(`/departaments/${id}`);

  return data;
};

export const updateDepartament = async (id: string, body: IDepartaments) => {
  const { data } = await api.put(`/departaments/${id}`, body);

  return data;
};

export const deleteDepartament = async (id: string) => {
  const { data } = await api.delete(`/departaments/${id}`);

  return data;
};

export const getDepartamentsSearch = async (value: string) => {
  const { data } = await api.get<IDepartaments[]>(`/departaments?q=${value}`);

  return data;
};
