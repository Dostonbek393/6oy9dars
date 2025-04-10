import { useCollection } from "../hooks/useCollection";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { TiStar, TiStarOutline } from "react-icons/ti";

function Home() {
  const [ratings, setRatings] = useState({});

  const handleRating = (id, star) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: star,
    }));
  };

  const bgColors = [
    "bg-red-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
    "bg-orange-100",
  ];

  const getRandomColor = () =>
    bgColors[Math.floor(Math.random() * bgColors.length)];

  const { data, loading } = useCollection("recepies");

  if (loading) {
    return <div className="text-center text-xl text-red-700">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 hover:text-fuchsia-700 cursor-pointer">
        All Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data &&
          data.map((r) => {
            const randomBg = getRandomColor();
            return (
              <div
                key={r.id}
                className={`${randomBg} rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition-all  duration-300 cursor-pointer flex flex-col h-full`}
              >
                <h2 className="text-2xl text-red-600 font-semibold mb-2">
                  {r.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  CookingTime: {r.cookingTime} ⏱️
                </p>
                <p className="text-xl text-green-600 font-semibold mb-2">
                  Ingredients: {r.ingredients.join(", ")}
                </p>
                <h2 className="text-xl text-amber-500">
                  Description: {r.description} ...
                </h2>
                <div className="flex mt-3 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star}>
                      {ratings[r.id] >= star ? (
                        <TiStar
                          className="text-yellow-400 cursor-pointer text-2xl"
                          onClick={() => handleRating(r.id, star)}
                        />
                      ) : (
                        <TiStarOutline
                          className="text-yellow-400 cursor-pointer text-2xl"
                          onClick={() => handleRating(r.id, star)}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <button className="bg-green-300 border-2 border-green-500 text-black p-3 rounded-lg hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer mt-auto ml-15 flex items-center justify-center">
                  Buyurtma berish <TiShoppingCart className="ml-2 text-xl" />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
