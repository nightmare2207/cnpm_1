import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../auth/api";

function useLogin() {
  const [account, setAccount] = useState({ userName: "", passWord: "" });
  const navigate = useNavigate();

  const checkLogin = async (account) => {
    try {
      const data = await authenticateUser(account);
      return { isAuthenticated: data.isAuthenticated, userType: data.userType };
    } catch (error) {
      return { isAuthenticated: false, userType: null };
    }
  };

  const handleClick = async (event, checkL, checkS) => {
    event.preventDefault();
    const { isAuthenticated, userType } = await checkLogin(account);
    checkL(isAuthenticated);
    checkS(userType === "student");

    Swal.fire({
      title: isAuthenticated ? "Good job!" : "Error!",
      text: isAuthenticated
        ? "You logged in successfully!"
        : "Incorrect username or password!",
      icon: isAuthenticated ? "success" : "error",
    });

    if (isAuthenticated) {
      navigate("/");
    }
  };

  return {
    account,
    setAccount,
    handleClick,
  };
}

export default useLogin;
