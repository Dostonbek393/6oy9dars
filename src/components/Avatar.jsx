function Avatar({ user }) {
  return (
    <div className="p-4 items-center justify-center flex-col flex">
      <div className="avatar">
        <div className="w-18 rounded-full cursor-pointer">
          <img src={user.photoURL} />
        </div>
      </div>
      <h2 className="text-fuchsia-700 text-2xl cursor-pointer hover:text-red-700">
        Hello, {user.displayName}
      </h2>
    </div>
  );
}

export default Avatar;
