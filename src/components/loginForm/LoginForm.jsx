import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

function LoginForm({ account, setAccount, handleClick, checkLogin }) {
  return (
    <div className="modal-overplay">
      <div className="wrapper">
        <form className="form-box login">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" className="login-logo">
              <g fill="#61DAFB">
                {/* SVG path here */}
              </g>
            </svg>
          </div>
          <h1>Sign In</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={account.userName}
              onChange={(e) => setAccount({ ...account, userName: e.target.value })}
              required
            />
            <FaUser className="login-icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={account.passWord}
              onChange={(e) => setAccount({ ...account, passWord: e.target.value })}
              required
            />
            <FaLock className="login-icon" />
          </div>
          <button
            type="submit"
            className="login-btn"
            onClick={(event) => handleClick(event, checkLogin)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
