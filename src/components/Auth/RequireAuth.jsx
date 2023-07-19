/* eslint-disable */
import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  return (
    <>
      {cookies.access_token !== "" ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};

export default RequireAuth;
