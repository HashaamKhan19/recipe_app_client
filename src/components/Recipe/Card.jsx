/*eslint-disable*/
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BallSpinner, ImpulseSpinner, StageSpinner } from "react-spinners-kit";

const Card = ({ recipe, index, savedRecipes }) => {
  const [loading, setLoading] = useState(false);

  const handleSave = async (id) => {
    const userID = localStorage.getItem("userID");

    setLoading(true);
    try {
      const result = await axios.put("http://localhost:3000/recipes", {
        id,
        userID,
      });
      setLoading(false);
      toast.success("Recipe saved successfully");
      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <div
      className="group bg-white rounded-lg shadow-sm border-[2px] p-4 max-w-[330px] hover:shadow-md"
      key={index}
    >
      <img
        src={recipe.imageURL}
        alt="Recipe"
        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-all duration-300"
      />
      <div className="mt-1">
        <div className="flex flex-row justify-between mt-2">
          <h2 className="text-lg font-semibold">{recipe.name}</h2>
          <button
            className="bg-primary text-white rounded-sm px-2 mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => handleSave(recipe._id)}
            disabled={savedRecipes?.savedRecipes?.find(
              (savedRecipe) => savedRecipe === recipe._id
            )}
          >
            {loading ? <StageSpinner size={20} color={"#fff"} /> : "Save"}
          </button>
        </div>
        <p className="text-gray-600">
          Cooking Time: {recipe.cookingTime} minutes
        </p>
        <div className="flex flex-row gap-2 items-center mt-2">
          <p className="text-gray-600">Ingredients:</p>
          <select className="border-2">
            {recipe.ingredients.map((ingredient, idx) => {
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
};

export default Card;
