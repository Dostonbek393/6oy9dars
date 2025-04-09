import { useState } from "react";
import FormTextArea from "../components/FormTextArea";
import Forminput from "../components/Forminput";
import { useFirestore } from "../hooks/useFirestore";
import { useNavigate } from "react-router-dom";

function Create() {
  const { addDocument } = useFirestore("recepies");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const navigate = useNavigate();

  const addIngredient = () => {
    const trimmed = newIngredient.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients((prev) => [...prev, trimmed]);
      setNewIngredient("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get("title");
    const cookingTime = formData.get("cookingTime");
    const description = formData.get("description");

    addDocument({
      title,
      cookingTime: `${cookingTime} minutes`,
      description,
      ingredients,
    });

    navigate("/");
  };

  return (
    <div className="py-8 px-3">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold mb-4">Create New Recipe</h2>

        <Forminput name="title" label="Title" type="text" />
        <Forminput name="cookingTime" label="Cooking Time" type="number" />

        <div className="flex flex-col w-full mt-4">
          <Forminput
            name="ingredients"
            label="Ingredients"
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button
            type="button"
            onClick={addIngredient}
            className="btn btn-primary self-end mt-2"
          >
            Add
          </button>

          <p className="mt-2">
            ingredient:{" "}
            {ingredients.map((i) => (
              <i key={i} className="mr-2">
                {i}
              </i>
            ))}
          </p>
        </div>

        <FormTextArea name="description" label="Description" />

        <div className="mt-5 flex justify-center">
          <button className="btn btn-primary" type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
