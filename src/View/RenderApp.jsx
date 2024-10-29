import React, { useState } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import DefaultLayout from "../components/Layout/DefaultLayout/DefaultLayout";
import Login from "../components/loginForm/Login";
import Home from "../pages/Home";
import { StudentRoutes, TeacherRoutes } from "../routes/index";

function RenderApp() {
  const [isLogin, setIsLogin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  function handleLogout() {
    setIsLogin(false);
    setIsStudent(false);
  }
  const ProtectedRoute = ({ children }) => {
    return isLogin ? children : <Navigate to="/login" />;
  };
  const PublicRoute = ({ children }) => {
    return isLogin ? <Navigate to="/" /> : children;
  };

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login checkLogin={setIsLogin} checkStudent={setIsStudent} />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DefaultLayout
                items={isStudent ? StudentRoutes : TeacherRoutes}
                onLogout={handleLogout}
              />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          {StudentRoutes.concat(TeacherRoutes).map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default RenderApp;
