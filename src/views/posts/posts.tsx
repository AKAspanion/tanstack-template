import { usePostsQuery } from "@query/queries/posts";
import { Link, Outlet } from "@tanstack/react-router";

import "./posts.css";

function Posts() {
  const { status, data, error } = usePostsQuery();

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {JSON.stringify(error)}</span>;
  }

  return (
    <div>
      <Link to="/posts/create">Create</Link>
      <Outlet />
      <div className="post-card-container">
        {data?.data &&
          data?.data?.map((u, i) => {
            return (
              <div className="post-card" key={i}>
                <div className="post-card-title">{u?.title || "-"}</div>
                <div className="post-card-body">{u?.body || "-"}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Posts;
