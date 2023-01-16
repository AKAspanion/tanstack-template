import { axiosInstance } from "@api";

export const getUsers = () => axiosInstance.get<User[]>("/users");
