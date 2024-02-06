import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersoneOutlineIcon } from "../assets/svg/personIcon.svg";

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
            <ExploreIcon
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
                Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#2C2C2C" : "#8F8F8F"}
              width="36px"
              height="36px"
            />
            <p
                className={
                    pathMatchRoute('/offers')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
            >
                Offer</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersoneOutlineIcon
              fill={pathMatchRoute("/profile") ? "#2C2C2C" : "#8F8F8F"}
              width="36px"
              height="36px"
            />
            <p
                className={
                    pathMatchRoute('/profile')
                    ? 'navbarListItemNameActive'
                    : 'navbarListItemName'
                }
            >
                Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
