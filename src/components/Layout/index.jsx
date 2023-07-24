/* eslint-disable */
import React, { useState } from "react";
import Logo from "../../assets/images/recipeLogo.png";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-slate-300 py-4 px-12 shadow-sm sticky mb-4 top-0">
      <div className="w-full flex flex-row justify-between">
        <div className="flex items-center gap-4">
          <img className="h-8 w-auto" src={Logo} />
          <h1 className="text-3xl font-bold">Recipe</h1>
        </div>

        <div className="flex items-center gap-6">
          <h1
            className={`font-semibold text-xl cursor-pointer ${
              isLinkActive("/") ? "text-secondary" : "hover:text-secondary"
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            All Recipes
          </h1>
          <h1
            className={`font-semibold text-xl cursor-pointer ${
              isLinkActive("/createRecipe")
                ? "text-secondary"
                : "hover:text-secondary"
            }`}
            onClick={() => {
              navigate("/createRecipe");
            }}
          >
            Create Recipe
          </h1>

          <button
            onClick={() => {
              setCookies("access_token", "");
            }}
            className="bg-primary border-black px-2 py-[4px] rounded-md text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
