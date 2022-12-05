import api from ".";
import { IDepartaments } from "../interfaces";

export const getDepartaments = async () => {
  const { data } = await api.get<IDepartaments[]>("/departments");

  return data;
};
