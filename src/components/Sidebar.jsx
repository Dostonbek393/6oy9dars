import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Sidebar() {
  const { user } = useGlobalContext();
  return (
    <div className="col-span-2 bg-amber-100">
      <Avatar user={user} />
      <nav className="flex flex-col gap-5 pl-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
