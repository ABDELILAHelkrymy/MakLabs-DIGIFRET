import React from "react";
import { SidebarWithBurgerMenu } from "../sideBar/Sidebar";
import { PhoneIcon, BellIcon } from "@heroicons/react/24/outline";
import { MobileNav, Navbar, Typography } from "@material-tailwind/react";
import NotificationTrajet from "../../pages/trips/NotificationTrajet";
import { useSelector } from "react-redux";

function NavList() {
  return <NotificationTrajet />;
}

const Header = () => {
  const { authData, isLoading } = useSelector((state) => state.auth);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const navList = (
    <ul className="my-2 flex justify-between lg:mb-0 lg:mt-0 flex-row w-full">
      {authData?.user?.isCompleted && <SidebarWithBurgerMenu />}
      <div className="w-full flex justify-center">
        <Typography color="gray" className="text-3xl">
          Digifret
        </Typography>
      </div>
      {authData?.user?.isCompleted && (
        <BellIcon
          className="phoneIcon h-10 w-10"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      )}
    </ul>
  );
  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          {navList}
        </div>
      </Navbar>
      <MobileNav open={isNavOpen} className="z-10 top-10 fixed">
        <NavList />
      </MobileNav>
    </>
  );
};

export default Header;

