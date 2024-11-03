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

  const handleClick = async (event, checkL) => {
    event.preventDefault();
    const { isAuthenticated, userType } = await checkLogin(account);
    console.log(1);
    if (isAuthenticated) {
      localStorage.setItem("userType", userType);
      localStorage.setItem("isAuthenticated", isAuthenticated);
      checkL(isAuthenticated);
    }
    Swal.fire({
      title: isAuthenticated ? "Good job!" : "Error!",
      text: isAuthenticated
        ? "You logged in successfully!"
        : "Incorrect username or password!",
      icon: isAuthenticated ? "success" : "error",
    });
  };

  return {
    account,
    setAccount,
    handleClick,
  };
}

export default useLogin;
