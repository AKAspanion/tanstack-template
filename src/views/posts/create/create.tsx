import { createPostMutation } from "@query/mutations/posts";
import { useState } from "react";

function CreatePost() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const mutation = createPostMutation();

  return (
    <div>
      {mutation.isLoading ? (
        "Adding post..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {JSON.stringify(mutation?.error)}</div>
          ) : null}

          {mutation.isSuccess ? <div>Post added!</div> : null}
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />

          <button
            onClick={() => {
              mutation.mutate({ title, body, userId: "1" });
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  );
}

export default CreatePost;
