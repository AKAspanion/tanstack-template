import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@api/users";

export const useUsersQuery = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
