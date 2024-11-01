import React from "react";
import useLogin from "../../hook/useLogin";
import LoginForm from "./LoginForm";
function Login({ checkLogin }) {
  const { account, setAccount, handleClick } = useLogin();
  return (
    <LoginForm
      account={account}
      setAccount={setAccount}
      handleClick={handleClick}
      checkLogin={checkLogin}
    />
  );
}

export default Login;
