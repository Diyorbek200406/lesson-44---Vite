import { Link, useLocation } from "react-router-dom";
const BreadCrumps = () => {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((e) => e != "")
    .map((item) => {
      currentLink.push(`/${item}`);
      return (
        <div className="crumb" key={item}>
          <Link to={currentLink.join("")}>{item}</Link>
        </div>
      );
    });
  console.log(crumbs);
  return <div className="breadcrumbs">{crumbs}</div>;
};

export default BreadCrumps;
