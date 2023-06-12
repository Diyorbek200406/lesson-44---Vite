import { NavLink, Outlet } from "react-router-dom";
import BreadCrumps from "../components/BreadCrumps";
const RootLayout = () => {
  return (
    <>
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <BreadCrumps />
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer-container">
          <h1>footer</h1>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
