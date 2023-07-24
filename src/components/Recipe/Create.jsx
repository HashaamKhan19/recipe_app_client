/*eslint-disable*/
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { SwapSpinner } from "react-spinners-kit";

const Create = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [cookingTime, setCookingTime] = useState(0);

  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput]);
      setIngredientInput("");
    }
  };

  const userOwner = localStorage.getItem("userID");

  const handleSubmit = async (event) => {
    if (name.length < 3) {
      toast.error("Name must be at least 3 characters long");
      return;
    }

    if (ingredients.length === 0) {
      toast.error("Ingredients are required!");
      return;
    }

    if (instructions.length < 10) {
      toast.error("Instructions must be at least 10 characters long");
      return;
    }

    if (cookingTime === 0) {
      toast.error("Cooking Time is required");
      return;
    }

    event.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:3000/recipes", {
        name,
        ingredients,
        instructions,
        imageURL,
        cookingTime,
        userOwner,
      });
      setLoading(false);
      toast.success("Recipe created successfully!");
      console.log("result", result);
      setName("");
      setIngredients([]);
      setInstructions("");
      setImageURL("");
      setCookingTime(0);
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <div className="px-[1%] mb-10">
      <h1 className="text-center text-2xl font-bold uppercase mt-12">
        Create Recipe
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-[24px] sm:max-w-sm sm:w-full sm:mx-auto space-y-1">
          <label
            htmlFor="name"
            className="block text-md font-semibold leading-8 text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block rounded-md py-1 border-2 border-gray-500 px-3"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label
            htmlFor="ingredients"
            className="block text-md font-semibold leading-8 text-gray-900"
          >
            Ingredients
          </label>

          <div className="flex flex-row gap-3">
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              className="block rounded-md py-1 border-2 border-gray-500 px-3 w-full"
              onChange={(e) => setIngredientInput(e.target.value)}
            />
            <button
              className="bg-gray-500 text-white rounded-md px-2"
              type="button"
              onClick={handleAddIngredient}
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap mt-4">
            {ingredients.map((ingredient, index) => (
              <div
                className="bg-primary text-white rounded-full px-3 py-1 m-1 flex items-center"
                key={index}
              >
                <p>{ingredient}</p>
                <button
                  className="ml-2 text-white rounded-full bg-black px-2"
                  onClick={() => {
                    const newIngredients = [...ingredients];
                    newIngredients.splice(index, 1);
                    setIngredients(newIngredients);
                  }}
                >
                  <p className="self-center">x</p>
                </button>
              </div>
            ))}
          </div>

          <label
            htmlFor="instructions"
            className="block text-md font-semibold leading-8 text-gray-900"
          >
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            className="block rounded-md border-2 border-gray-500 px-3 py-1"
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>

          <label
            htmlFor="imageURL"
            className="block text-md font-semibold leading-8 text-gray-900"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            className="block rounded-md py-1 border-2 border-gray-500 px-3"
            onChange={(e) => {
              setImageURL(e.target.value);
            }}
            required
          />

          <label
            htmlFor="cookingTime"
            className="block text-md font-semibold leading-8 text-gray-900"
          >
            Cooking Time (Minutes)
          </label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            className="block rounded-md py-1 border-2 border-gray-500 px-3"
            min={1}
            max={1000}
            onChange={(e) => setCookingTime(e.target.value)}
          />
          <div className="pt-3">
            <button
              className="bg-primary w-full text-white p-2 rounded-md flex items-center justify-center"
              type="submit"
            >
              {loading ? (
                <SwapSpinner size={30} color={"#fff"} />
              ) : (
                "Create Recipe"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
