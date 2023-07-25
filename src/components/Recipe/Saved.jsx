/*eslint-disable*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircleSpinner } from "react-spinners-kit";

const Saved = () => {
  const [loading, setLoading] = useState(true);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/recipes/savedRecipes/${userID}`)
      .then((res) => {
        setSavedRecipes(res?.data?.savedRecipes);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-4 sm:gap-4 gap-y-8 px-[1%] pb-8">
      {loading && (
        <div className="absolute top-2/4 left-2/4">
          <CircleSpinner size={60} color="#F6546a" />
        </div>
      )}

      {savedRecipes.map((recipe, idx) => {
        return (
          <div
            className="group bg-white rounded-lg shadow-sm border-[2px] p-4 max-w-[330px] hover:shadow-md"
            key={idx}
          >
            <img
              src={recipe?.imageURL}
              alt="Recipe"
              className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-all duration-300"
            />
            <div className="mt-1">
              <div className="flex flex-row justify-between mt-2">
                <h2 className="text-lg font-semibold">{recipe?.name}</h2>
              </div>
              <p className="text-gray-600">
                Cooking Time: {recipe?.cookingTime} minutes
              </p>
              <div className="flex flex-row gap-2 items-center mt-2">
                <p className="text-gray-600">Ingredients:</p>
                <select className="border-2">
                  {recipe?.ingredients?.map((ingredient, idx) => {
                    return (
                      <option key={idx} value={ingredient}>
                        {ingredient}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Saved;
