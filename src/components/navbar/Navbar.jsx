import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { TruckIcon, CalendarDaysIcon, UserIcon } from "@heroicons/react/24/solid";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <CalendarDaysIcon
              fill={pathMatchRoute("/") ? "#2C2C2C" : "#8F8F8F"}
              width="36px"
              height="36px"
            />
            <p
                className={
                    pathMatchRoute('/')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
            >
                Trajets</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/garage")}>
            <TruckIcon
              fill={pathMatchRoute("/garage") ? "#2C2C2C" : "#8F8F8F"}
              width="36px"
              height="36px"
            />
            <p
                className={
                    pathMatchRoute('/garage')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
            >
                Garage</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/sign-up")}>
            <UserIcon
              fill={pathMatchRoute("/sign-up") ? "#2C2C2C" : "#8F8F8F"}
              width="36px"
              height="36px"
            />
            <p
                className={
                    pathMatchRoute('/sign-up')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
            >
                Register</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
