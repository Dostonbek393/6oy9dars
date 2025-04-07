function Avatar({ user }) {
  return (
    <div className="p-4 items-center justify-center flex-col flex">
      <div className="avatar">
        <div className="w-18 rounded-full">
          <img src={user.photoURL} />
        </div>
      </div>
      <h2>Hello, {user.displayName}</h2>
    </div>
  );
}

export default Avatar;
