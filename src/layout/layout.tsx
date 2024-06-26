import { NavLink, Outlet } from "react-router-dom";
import { LOGO } from "../common/constants/imgs";
import Logo from "../components/logo";
import {
  PATH_ABOUT_ME,
  PATH_INDEX,
  PATH_PROJECTS,
  PATH_SKILLS,
} from "../common/constants/path";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";

function styleProps<T>(isActive: T) {
  return {
    backgroundColor: isActive ? "#222831" : "",
    color: isActive ? "#FFFFFF" : "",
    borderRadius: isActive ? "2px" : "",
    transition: isActive ? ".6s" : "",
  };
}

function stylePropsMobile<T>(isActive: T) {
  return {
    backgroundColor: isActive ? "#0F4C75" : "",
    color: isActive ? "#FFFFFF" : "",
    borderRadius: isActive ? "2px" : "",
    transition: isActive ? ".6s" : "",
  };
}

function Layout() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-svh lg:h-lvh relative overflow-hidden">
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-5 gap-3 h-20 ">
        <div className="lg:col-end-3 col-start-1 flex justify-center items-center">
          <div className="lg:w-16 lg:h-16 w-12 h-12">
            <Logo imgUrl={LOGO} />
          </div>
        </div>
        <div className="lg:col-start-6 lg:col-end-13 hidden lg:block">
          <div className="w-full h-full flex lg:items-center">
            <nav className="kanit uppercase font-medium">
              <NavLink
                to={PATH_INDEX}
                className="px-4 py-2 transition-colors duration-[.6s]"
                end
                style={({ isActive }) => styleProps(isActive)}
              >
                Info
              </NavLink>
              <NavLink
                to={PATH_ABOUT_ME}
                className="ml-6 px-4 py-2 transition-colors duration-[.6s]"
                style={({ isActive }) => styleProps(isActive)}
              >
                About me
              </NavLink>
              <NavLink
                to={PATH_PROJECTS}
                className="ml-6 px-4 py-2 transition-colors duration-[.6s]"
                style={({ isActive }) => styleProps(isActive)}
              >
                Project
              </NavLink>
              <NavLink
                to={PATH_SKILLS}
                className="ml-6 px-4 py-2 transition-colors duration-[.6s]"
                style={({ isActive }) => styleProps(isActive)}
              >
                Skills
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="lg:hidden md:col-end-9 col-end-6 flex items-center justify-center">
          <HiBars3BottomRight
            className="w-8 h-8"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <div>
        <Outlet />
      </div>

      {isOpen ? (
        <div
          className="w-full h-screen absolute top-0 right-0 opacity-40 bg-[#222831]"
          onClick={() => setIsOpen(false)}
        ></div>
      ) : null}
      <div
        className={`w-2/3 h-screen absolute top-0 right-0 bg-[#222831] transition-transform duration-500 ${
          !isOpen ? "translate-x-full" : ""
        }`}
      >
        <div className="kanit uppercase text-white text-3xl font-medium flex flex-col items-end justify-center h-screen gap-3">
          <NavLink
            to={PATH_INDEX}
            className="mr-6 px-4 py-2 transition-colors duration-[.6s]"
            end
            style={({ isActive }) => stylePropsMobile(isActive)}
          >
            Info
          </NavLink>
          <NavLink
            to={PATH_ABOUT_ME}
            className="mr-6  px-4 py-2 transition-colors duration-[.6s]"
            style={({ isActive }) => stylePropsMobile(isActive)}
          >
            About me
          </NavLink>
          <NavLink
            to={PATH_PROJECTS}
            className="mr-6  px-4 py-2 transition-colors duration-[.6s]"
            style={({ isActive }) => stylePropsMobile(isActive)}
          >
            Project
          </NavLink>
          <NavLink
            to={PATH_SKILLS}
            className="mr-6 px-4 py-2 transition-colors duration-[.6s]"
            style={({ isActive }) => stylePropsMobile(isActive)}
          >
            Skills
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Layout;
