import FormTextArea from "../components/FormTextArea";
import Forminput from "../components/Forminput";

function Create() {
  return (
    <div className="py-8 px-3">
      <form>
        <h2 className="text-3xl font-bold">Create New Recepies</h2>
        <Forminput name="title" label="title" type="text" />
        <Forminput name="cookingTime" label="Cooking Time" type="number" />
        <Forminput name="ingredients" label="Ingredients" type="text" />
        <FormTextArea label="Description" />
        <div className="mt-5 flex justify-center">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Create;
