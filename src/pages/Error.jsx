import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="pageNotFound-container">
      <h1>👇 Page Not Found 👇</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        fugit laborum perspiciatis, provident ipsam voluptatibus voluptatem
        dolores consectetur minus magni? Debitis nisi repellendus dolore
        reiciendis numquam incidunt similique laboriosam? Illum natus error
        minus labore reprehenderit voluptatum dignissimos molestias similique
        sequi quam porro facilis blanditiis maiores, asperiores possimus
        praesentium consequuntur fugiat?
      </p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default Error;
