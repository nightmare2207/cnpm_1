import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/img/logo.png";
import avatar from "../../../assets/img/avatar_md.png";
import { TiThMenu } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
function Header({ handleClickMenu, handleLogout }) {
  return (
    <>
      <header>
        <div className="logo-selectMenu-app">
          <div className="sidebar-title">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="logo-app" />
              <h1>Quản lý sinh viên</h1>
            </Link>
          </div>
          <TiThMenu className="menu-icon" onClick={handleClickMenu} />
        </div>
        <div className="header-searchBox">
          <div className="search-input">
            <input type="text" placeholder="Tìm kiếm mssv" />
          </div>
          <button>
            <FaSearch className="search-icon" />
          </button>
        </div>
        <div className="header-user">
          <img src={avatar} alt="avatar" className="header-user-avatar" />
          <span>ẩn danh</span>
          <ul className="header-user-list">
            <li onClick={handleLogout}>
              <a href="#">
                <RiLogoutBoxLine className="logout-icon" />
                <span>Log-out</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
