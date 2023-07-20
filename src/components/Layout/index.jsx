/* eslint-disable */
import React from "react";
import Logo from "../../assets/images/recipeLogo.png";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  console.log("COOOOOOKIES", cookies);

  return (
    <header className="bg-slate-300 py-4 px-12 shadow-sm sticky mb-4">
      <div className="w-full flex flex-row justify-between">
        <div className="flex items-center gap-4">
          <img className="h-8 w-auto" src={Logo} />
          <h1 className="text-3xl font-bold">Recipe</h1>
        </div>

        <div className="flex items-center gap-6">
          <h1 className="font-semibold text-xl">All Recipes</h1>
          <h1 className="font-semibold text-xl">Create Recipe</h1>

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
