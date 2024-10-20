import React, { useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import Login from "../components/loginForm/Login";
import { StudentRoutes, TeacherRoutes } from "../routes/index";
function RenderApp() {
  const [isLogin, setIsLogin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  function handleLogout() {
    setIsLogin(false);
    setIsStudent(false);
  }
  return (
    <>
      {/* <DefaultLayout items={StudentRoutes} /> */}
      {isLogin ? (
        <DefaultLayout
          items={isStudent ? StudentRoutes : TeacherRoutes}
          onLogout={handleLogout}
        />
      ) : (
        <Login checkLogin={setIsLogin} checkStudent={setIsStudent} />
      )}
    </>
  );
}

export default RenderApp;
