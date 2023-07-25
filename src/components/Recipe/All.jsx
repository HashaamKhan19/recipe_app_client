/*eslint-disable*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  CircleSpinner,
  StageSpinner,
  WhisperSpinner,
} from "react-spinners-kit";

const All = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios.get("http://localhost:3000/recipes").then((res) => {
      console.log(res);
      setRecipes(res?.data?.recipes);
      setLoading(false);
    });

    axios
      .get(`http://localhost:3000/recipes/savedRecipes/ids/${userID}`)
      .then((res) => {
        setSavedRecipes(res?.data);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 sm:gap-4 gap-y-8 px-[1%] pb-8">
      {loading && (
        <div className="absolute top-2/4 left-2/4">
          <CircleSpinner size={60} color="#F6546a" />
        </div>
      )}

      {recipes?.map((recipe, idx) => {
        return <Card recipe={recipe} index={idx} savedRecipes={savedRecipes} />;
      })}
    </div>
  );
};

export default All;
