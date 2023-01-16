import { createPost } from "@api/posts";
import { useMutation } from "@tanstack/react-query";

export const createPostMutation = () => useMutation({ mutationFn: createPost });
