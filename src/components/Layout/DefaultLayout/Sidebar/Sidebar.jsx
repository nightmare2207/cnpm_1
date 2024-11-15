import { useState } from "react";
import logo from "../../../assets/img/logo.png";
import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar({ items = [], isMenuActive }) {
  const [isSelected, setIsSelected] = useState("dashboard");
  function handleClick(change) {
    setIsSelected(change);
  }
  return (
    <aside id="sidebar" className={isMenuActive ? "scale-min" : ""}>
      <div className="navigation">
        <ul className="nav-list">
          {items.length > 0 ? (
            items.map((item, index) => (
              <li
                key={index}
                className={
                  isSelected === item.identify
                    ? "nav-item selected"
                    : "nav-item"
                }
                onClick={() => handleClick(item.identify)}
              >
                <Link to={item.path}>
                  <item.icon className="nav-icon" />
                  <span className="nav-item-title">{item.name}</span>
                </Link>
              </li>
            ))
          ) : (
            <li>No items available</li>
          )}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
