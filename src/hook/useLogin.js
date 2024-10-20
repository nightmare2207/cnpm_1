import { useState } from "react";
import Swal from "sweetalert2";
import { AccountStudent, AccountTeacher } from "../data";

function useLogin() {
  const [account, setAccount] = useState({
    userName: "",
    passWord: "",
  });
  function checkLogin(account, checkS) {
    const isStudentAccount = AccountStudent.some((student) => {
      return (
        student.userName === account.userName &&
        student.passWord === account.passWord
      );
    });

    if (isStudentAccount) {
      checkS(true);
      return true;
    }

    const isTeacherAccount = AccountTeacher.some((teacher) => {
      return (
        teacher.userName === account.userName &&
        teacher.passWord === account.passWord
      );
    });

    if (isTeacherAccount) {
      checkS(false);
      return true;
    }
    return false;
  }
  function handleClick(event, checkL, checkS) {
    event.preventDefault();
    const isLogin = checkLogin(account, checkS);
    checkL(isLogin);
    if (isLogin) {
      Swal.fire({
        title: "Good job!",
        text: "You logged in successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Incorrect username or password!",
        icon: "error",
      });
    }
  }

  return {
    account,
    setAccount,
    handleClick,
  };
}

export default useLogin;
