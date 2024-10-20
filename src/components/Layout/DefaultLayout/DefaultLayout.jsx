import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Home from "../../../pages/Home/index.js";
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
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {items.map((item, index) => (
            <Route key={index} path={item.path} element={item.element}></Route>
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default DefaultLayout;
