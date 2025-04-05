import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data } = useCollection("users");

  return (
    <div className="flex flex-col items-center mt-5">
      {data &&
        data.map((u) => (
          <div
            key={u.id}
            className={`w-64 p-4 m-2 rounded-lg text-center transition-transform transform cursor-pointer flex items-center justify-between shadow-xl ${
              u.online
                ? "bg-green-100 border-2 border-green-500"
                : "bg-red-100 border-2 border-red-500"
            } hover:scale-105 hover:border-amber-400`}
          >
            <div>
              <h1 className="text-lg font-bold mb-2 text-blue-700">
                {u.displayName}
              </h1>
              <p className="text-gray-600">{u.online ? "Online" : "Offline"}</p>
            </div>

            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <img
                src={u.photoURL}
                alt={`${u.displayName}'s avatar`}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default OnlineUsers;
