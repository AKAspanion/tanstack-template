import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@api/posts";

export const usePostsQuery = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
