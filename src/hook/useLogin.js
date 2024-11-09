import { useState } from "react";
import Swal from "sweetalert2";
import { authenticateUser } from "../auth/api";

function useLogin() {
  const [account, setAccount] = useState({ userName: "", passWord: "" });
  const checkLogin = async (account) => {
    try {
      const data = await authenticateUser(account);
      return { isAuthenticated: data.isAuthenticated, userType: data.userType };
    } catch (error) {
      return { isAuthenticated: false, userType: null };
    }
  };

  const handleClick = (event, checkLogin) => {
    event.preventDefault();
    if (account.userName === "admin" && account.passWord === "admin") {
      localStorage.setItem("userType", "admin");
      checkLogin(true);
    } else if (account.userName === "student" && account.passWord === "student") {
      localStorage.setItem("userType", "student");
      checkLogin(true);
    } else if (account.userName === "teacher" && account.passWord === "teacher") {
      localStorage.setItem("userType", "teacher");
      checkLogin(true);
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
  };

  return { account, setAccount, handleClick };
}

export default useLogin;
