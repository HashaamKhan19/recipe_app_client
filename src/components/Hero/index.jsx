/*eslint-disable*/
import React from "react";
import { useCookies } from "react-cookie";

const Hero = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  console.log("COOOOOOKIES", cookies);

  return (
    <div>
      This is home page
      <button
        onClick={() => {
          setCookies("access_token", "");
        }}
        className="bg-red-500 border-2 border-black px-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Hero;
