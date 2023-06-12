import { Outlet } from "react-router-dom";

const ArticlesLayout = () => {
  return (
    <div>
      <h2>My ArticlesLayout</h2>
      <hr />
      <Outlet />
    </div>
  );
};

export default ArticlesLayout;
