import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/DetailPage">DetailPage</Link>
          </li>

        </ul>
      </nav> */}
      <Navbar></Navbar>
      <Outlet />
    </>
  )
};
export default Layout;