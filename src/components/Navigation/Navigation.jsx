import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selector";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contact</NavLink>}
    </nav>
  );
}
