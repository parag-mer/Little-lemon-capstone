import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Asset 16@4x.png";
export const Navbar = () => {
  const onClickHandler = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="app_nav">
      <div className="app_nav_logo">
        <img src={logo} alt="logo" width={200} />
      </div>
      <ul className="app_nav_links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link
          className="link"
          to="/#Menu"
          onClick={() => onClickHandler("Menu")}
        >
          Menu
        </Link>
        <Link
          className="link"
          to="/#Reviews"
          onClick={() => onClickHandler("Reviews")}
        >
          Reviews
        </Link>
        <Link className="link" to="/Reservations">
          Reservations
        </Link>
        <Link
          className="link"
          to="/#About"
          onClick={() => onClickHandler("About")}
        >
          About
        </Link>
      </ul>
    </nav>
  );
};
