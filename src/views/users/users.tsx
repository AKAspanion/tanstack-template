import { useUsersQuery } from "@query/queries/users";
import "./users.css";

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
      <div className="user-card-container">
        {data?.data &&
          data?.data?.map((u, i) => {
            return (
              <div className="user-card" key={i}>
                <div className="user-card-title">{u?.name || "-"}</div>
                <div className="user-card-body">{u?.email || "-"}</div>
                <div className="user-card-body">{u?.website || "-"}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Users;
