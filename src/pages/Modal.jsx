function Modal({ isOpen, onClose, children, recipe }) {
  if (!isOpen || !recipe) return null;

  const handleInnerClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0  flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-lg w-full relative shadow-lg"
        onClick={handleInnerClick}
      >
        <span
          onClick={onClose}
          className="absolute top-2 right-3 text-red-500 text-3xl cursor-pointer hover:scale-125 hover:shadow-xl transition duration-300 ease-in-out"
        >
          &times;
        </span>
        <h2 className="text-2xl font-bold text-fuchsia-700 mb-2 border-b-2 border-b-red-500">
          {recipe.title}
        </h2>
        <p className="text-gray-600 mb-2">🕒 {recipe.cookingTime}</p>
        <p className="text-green-700 font-semibold mb-2">
          Ingredients: {recipe.ingredients.join(", ")}
        </p>
        <h2 className="text-xl text-amber-500">
          Description: {recipe.description}
        </h2>

        {children}
      </div>
    </div>
  );
}

export default Modal;
