function FormTextArea({ name, label }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <textarea
        name={name}
        className="textarea h-24 w-full"
        placeholder="type here"
      ></textarea>
    </fieldset>
  );
}

export default FormTextArea;
