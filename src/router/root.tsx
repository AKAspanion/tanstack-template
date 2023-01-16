import { Outlet, Link } from "@tanstack/react-router";
import router from ".";
import RouterDevtools from "./devtools";

const Root = () => (
  <>
    <div>
      <Link to="/">Home</Link> ┊ <Link to="/about">About</Link>
    </div>
    <hr />
    <Outlet />
  </>
);

export default Root;
