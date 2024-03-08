import { useState } from "react";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, { name, ingredients }]);
    setName("");
    setIngredients("");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Recipe App</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          required
        />
        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
        >
          Add Recipe
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recipes</h2>
        {recipes.length === 0 ? (
          <p>No recipes added yet</p>
        ) : (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index} className="mb-4">
                <div className="bg-gray-100 rounded-md p-4">
                  <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
                  <p>{recipe.ingredients}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipeApp;
