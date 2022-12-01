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

// export const toggleStoreSeason = async (toggleSeason: boolean) => {
//   const { data } = await axiosInstance.patch('/store/season', { toggleSeason });

//   return data;
// };

// export const deleteProduct = async (id: number) => {
//   const { data } = await axiosInstance.delete(`/product/${id}`);

//   return data;
// };
