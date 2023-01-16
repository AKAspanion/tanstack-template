import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import router from "./router";
import queryClient from "./query/client";

function App() {
  return (
    <>
      <a className="read-the-docs" href="https://tanstack.com/" target="_blank">
        See TanStack Docs
      </a>
      <hr />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
