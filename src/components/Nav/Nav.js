import { NavLink } from "react-router-dom";
import "./styles.css";

const Nav = () => {
  return (
    <nav className="mainNav">
      <ul className="navList">
        <li>
          <NavLink exact to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
