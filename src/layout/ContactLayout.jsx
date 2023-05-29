import { NavLink, Outlet } from "react-router-dom";
const ContactLayout = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat
        architecto optio eius fuga voluptas quis illo, atque nesciunt
        reprehenderit saepe, illum similique necessitatibus sed dolor
        recusandae, impedit iusto nobis commodi qui voluptatibus doloremque quae
        consectetur eos? Deleniti, quod ipsum!
      </p>

      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ContactLayout;
