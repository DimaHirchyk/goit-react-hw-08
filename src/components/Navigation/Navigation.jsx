import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/contacts">Contact</NavLink>
    </nav>
  );
}
