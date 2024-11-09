import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import Login from "../components/loginForm/Login";
import { StudentRoutes, TeacherRoutes, AdminRoutes } from "../routes/index";

function RenderApp() {
  const [isLogin, setIsLogin] = useState(false);
  const [UserRouting, setUserRouting] = useState([]);

  function handleLogout() {
    setIsLogin(false);
    localStorage.clear();
  }

  const ProtectedRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/login" />;
  };

  const PublicRoute = ({ children }) => {
    return isLogin ? <Navigate to="/" /> : children;
  };

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    switch (userType) {
      case "student":
        setUserRouting(StudentRoutes);
        break;
      case "teacher":
        setUserRouting(TeacherRoutes);
        break;
      case "admin":
        setUserRouting(AdminRoutes);
        break;
      default:
        setUserRouting([]);
        break;
    }
  }, [isLogin]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login checkLogin={setIsLogin} />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DefaultLayout items={UserRouting} onLogout={handleLogout} />
          </ProtectedRoute>
        }
      >
        {UserRouting.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default RenderApp;
