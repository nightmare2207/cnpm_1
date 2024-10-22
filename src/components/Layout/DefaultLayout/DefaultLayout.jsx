import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import "./DefaultLayout.css";
function DefaultLayout({ items = [], onLogout }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleClick() {
    setIsMenuActive((prev) => !prev);
  }
  return (
    <div className="container">
      <Header
        handleClickMenu={handleClick}
        isMenuActive={isMenuActive}
        handleLogout={onLogout}
      />
      <Sidebar items={items} isMenuActive={isMenuActive} />
      <div className={isMenuActive ? "main active" : "main"}>
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
