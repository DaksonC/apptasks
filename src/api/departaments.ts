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
