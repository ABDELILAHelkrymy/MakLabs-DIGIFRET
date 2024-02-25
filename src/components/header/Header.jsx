import React from "react";
import { SidebarWithBurgerMenu } from "../sideBar/Sidebar";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Navbar, Typography } from "@material-tailwind/react";

const Header = () => {
  const navList = (
    <ul className="my-2 flex justify-between lg:mb-0 lg:mt-0 flex-row w-full">
      <SidebarWithBurgerMenu />
      <Typography color="gray" className="text-3xl">
        Digifret
      </Typography>
      <PhoneIcon className="phoneIcon h-10 w-10" />
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        {navList}
      </div>
    </Navbar>
  );
};

export default Header;
