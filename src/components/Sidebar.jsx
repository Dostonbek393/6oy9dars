import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Sidebar() {
  const { user } = useGlobalContext();
  return (
    <div className="col-span-2 bg-amber-100">
      <Avatar user={user} />
      <nav className="flex flex-col gap-5 p-4">
        <div className="hover:text-red-700 border-b-2 border-b-red-500">
          <Link to="/">Home</Link>
        </div>
        <div className="hover:text-red-700 border-b-2 border-b-red-500">
          <Link to="/create">Create</Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
