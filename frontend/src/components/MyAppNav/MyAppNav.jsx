import { NavLink } from "react-router";
import "./style.css";

export function MyAppNav() {
  return (
    <nav className="MyAppNav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about" end>About</NavLink>
    </nav>
  );
}
