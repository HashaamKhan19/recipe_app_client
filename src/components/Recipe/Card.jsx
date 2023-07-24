/*eslint-disable*/
import React from "react";

const Card = ({ recipe, index }) => {
  return (
    <div
      className="group bg-white rounded-lg shadow-sm border-[2px] p-4 max-w-[330px] cursor-pointer hover:shadow-md"
      key={index}
    >
      <img
        src={recipe.imageURL}
        alt="Recipe"
        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-all duration-300"
      />
      <div className="py-4">
        <h2 className="text-lg font-semibold">{recipe.name}</h2>
        <p className="text-gray-600 mb-1">Created By: John Doe</p>
        <p className="text-gray-600">
          Cooking Time: {recipe.cookingTime} minutes
        </p>
      </div>
    </div>
  );
};

export default Card;
