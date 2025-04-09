function Forminput({ name, label, type, value, onChange }) {
  return (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full"
      />
    </div>
  );
}

export default Forminput;
