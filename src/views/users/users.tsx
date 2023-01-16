import { useUsersQuery } from "@query/queries/users";

function Users() {
  const { status, data, error } = useUsersQuery();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {JSON.stringify(error)}</span>;
  }

  return (
    <div>
      <h3>These are our users!</h3>
      {data?.data &&
        data?.data.map((u: any) => {
          return <div>{u?.name || "-"}</div>;
        })}
    </div>
  );
}

export default Users;
