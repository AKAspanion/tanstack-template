import { axiosInstance } from "@api";

export const getPosts = () => axiosInstance.get<PostType[]>("/posts");

export const getPost = (id: string | number) =>
  axiosInstance.get(`/posts?userId=${id}`);

export const createPost = (data: PostRequestType) =>
  axiosInstance.post<PostType>("/posts", data);

export const updatePost = (id: string | number, data: PostType) =>
  axiosInstance.put(`/posts/${id}`, data);

export const modifyPost = (
  id: string | number,
  data: Pick<PostType, keyof PostType>
) => axiosInstance.patch(`/posts/${id}`, data);

export const deletePost = (id: string | number) =>
  axiosInstance.delete(`/posts/${id}`);
